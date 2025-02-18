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
        return db.getAllSync<Activity>("SELECT * FROM activities");
    }

    function reload() {
        const data = getActivities();
        setActivities(data);
    }

    useEffect(() => {
        reload();
    }, []);

    return { getActivities, activities }
}
