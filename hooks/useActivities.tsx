import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";


type Activity = {
    id: number
    steps: number
    date: number
}

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>();
    const db = useSQLiteContext();

    function getActivities() {
        return db.getAllSync<Activity>('Select * FROM activities')
    }

    useEffect(() => {
        const data = getActivities()
        console.log('DB DATA:')
        console.log(data)
        setActivities(data)
    }, [])

    return { getActivities, activities }
}
