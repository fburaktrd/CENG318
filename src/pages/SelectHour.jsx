import React , { useState } from 'react';
import TimeKeeper from 'react-timekeeper';

function SelectHour(props){
    const [time, setTime] = useState('12:34pm')
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