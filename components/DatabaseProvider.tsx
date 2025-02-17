import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'
import * as SQLite from 'expo-sqlite'
import React, { useState, useEffect, Suspense } from 'react'
import { View, Text } from 'react-native'

async function loadDatabase() {
    const name = 'activities.db'
    const dbPath = `${FileSystem.documentDirectory}SQLite/${name}`
    const fileInfo = await FileSystem.getInfoAsync(dbPath)

    if (!fileInfo.exists) {
        console.log('Database does not exist. Downloading...')
        const dbAsset = require('@/assets/' + name)
        const dbURI = Asset.fromModule(dbAsset).uri
        await FileSystem.makeDirectoryAsync(
            `${FileSystem.documentDirectory}SQLite`,
            { intermediates: true }
        )
        console.log('Directory created.')
        await FileSystem.downloadAsync(dbURI, dbPath)
    } else {
        console.log('Database already exists.')
    }
}


function useDB() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        loadDatabase()
            .then(() => {
                console.log('Database loaded successfully.')
                setLoaded(true)
            })
            .catch(error => {
                console.error("Failed to load database:", error)
                setLoaded(false)
            })
    }, [])

    return { loaded }
}

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
    const { loaded } = useDB()
    if (!loaded) return null

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <SQLite.SQLiteProvider useSuspense databaseName='activities.db'>
                {children}
            </SQLite.SQLiteProvider>
        </Suspense>
    )
}
