"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
    const date = new Date("2025-02-26T00:00:00+05:30"); 
    const cur = new Date();
    const diff = date.getTime() - cur.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);
        const [timeLeft, setTimeLeft] = useState({
        days: day,
        hours: hrs,
        minutes: min,
        seconds: sec
    });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;
                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    if (minutes > 0) {
                        minutes -= 1;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours -= 1;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            if (days > 0) {
                                days -= 1;
                                hours = 23;
                                minutes = 59;
                                seconds = 59;
                            } else {
                                clearInterval(countdownInterval);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <div className="flex justify-center my-4">
            <div className="grid grid-flow-col gap-5 text-center text-white auto-cols-max">
                <TimeUnit label="days" value={timeLeft.days} />
                <TimeUnit label="hours" value={timeLeft.hours} />
                <TimeUnit label="min" value={timeLeft.minutes} />
                <TimeUnit label="sec" value={timeLeft.seconds} />
            </div>
        </div>
    );
}

function TimeUnit({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex flex-col items-center">
            <span className="font-mono text-5xl">{value.toString().padStart(2, "0")}</span>
            <span className="text-sm">{label}</span>
        </div>
    );
}
