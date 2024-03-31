import { useEffect, useState } from "react"

export default function QuestionTimer({ timeOut, onTimeOut }) { 
    const [remainingTime, setRemainingTime] = useState(timeOut)

    useEffect(() => { 
        const time = setTimeout(onTimeOut, timeOut) 
        return () => { 
            clearTimeout(time)
        }
    },[onTimeOut, timeOut])
    
    
    useEffect(() => { 
      const interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 100)
      }, 100)
        return () => { 
            clearInterval(interval)
        }    
    },[])
   
    
    return (
        <progress id="question-time" value={remainingTime} max={ timeOut } />
    )
}