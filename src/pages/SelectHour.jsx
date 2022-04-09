import React , { useState } from 'react';
import TimeKeeper from 'react-timekeeper';

function SelectHour(){
    const [time, setTime] = useState('12:34pm')
    const [showTime, setShowTime] = useState(true)

    return (
        <div>
            {showTime &&
                <TimeKeeper
                    time={time}
                    onChange={(newTime) => setTime(newTime.formatted12)}
                    onDoneClick={() => setShowTime(false)}
                    switchToMinuteOnHourSelect
                />
            }
            <span>Time is {time}</span>
            {!showTime &&
                <button onClick={() => setShowTime(true)}>Show</button>
            }
        </div>
    )
}
export default SelectHour;