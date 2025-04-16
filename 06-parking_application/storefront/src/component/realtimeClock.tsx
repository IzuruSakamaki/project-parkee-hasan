import GeneralUtil from "@/util/generalUtil";
import { useState, useEffect } from "react";

export default function RealtimeClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="italic">
            {GeneralUtil.formatTime(time)}
        </p>
    );
}
