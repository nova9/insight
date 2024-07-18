import { alpha, Box, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import OutlineBox from "./OutlineBox";

type TimeLeftKeys = 'days' | 'hours' | 'minutes' | 'seconds';

interface TimeLeftInterface {
    days?: Number
    hours?: Number
    minutes?: Number
    seconds?: Number
}

export default function Countdown() {
    function calculateTimeLeft(): TimeLeftInterface {
        const targetDate = "2024-09-21T00:00:00"
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeftInterface>(calculateTimeLeft());

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft]);

    const timerComponents = [];
    for (const interval of Object.keys(timeLeft) as TimeLeftKeys[]) {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <Box
                    key={interval}
                    sx={{
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        // ml: -3
                        // mx:1
                    }}
                >
                    {timeLeft[interval].toString().padStart(2, '0')}{''}
                    <Typography
                        component="span"
                        sx={{
                            mr: 2,
                            fontSize: '1rem',
                            color: '#555',
                        }}
                    >
                        {interval}
                    </Typography>
                </Box>
            );
        }
    }

    return <>
        <OutlineBox>
            <Box
            sx={(theme) => ({
                // mt: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            })}
        >
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </Box>
        </OutlineBox>
    </>;
}