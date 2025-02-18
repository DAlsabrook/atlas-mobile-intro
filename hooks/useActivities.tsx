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
        return db.getAllSync<Activity>("SELECT * FROM activities ORDER BY date DESC");
    }

    function insertActivity(steps: number, date: Date) {
        db.execSync(`INSERT INTO activities (steps, date) VALUES (${steps}, ${Math.floor(date.getTime() / 1000)})`);
        reload();
    }

    function reload() {
        const data = getActivities();
        setActivities(data);
    }

    useEffect(() => {
        reload();
    }, []);

    return { getActivities, activities, insertActivity }
}
