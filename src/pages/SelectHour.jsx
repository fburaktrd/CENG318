import React , { useState } from 'react';
import TimeKeeper from 'react-timekeeper';

function SelectHour(props){
    const date = new Date();
    const [time, setTime] = useState(`${date.getHours()}:${date.getMinutes()}`)
    const [showTime, setShowTime] = useState(false)

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
            
            {!showTime &&
                <button onClick={() => setShowTime(true)}>Select {props.time}</button>
            }
        </div>
    )
}
export default SelectHour;