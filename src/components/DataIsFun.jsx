import React, {useState} from 'react'
import data from '../data.json' 
import MainCard from '../components/MainCard'
export default function DataIsFun() {

    const [timeFrame,setTimeFrame] = useState(1)
    const [stuff] = useState(data)

    function clickTimeFrame(num)
    {
    	setTimeFrame(num)
    }

    console.log("currentTimeFrame is " + timeFrame)






return (

    <MainCard 
        workTitle={stuff["0"]["title"]}
        timeFrame={timeFrame}
        clickTimeFrame={clickTimeFrame}
        timeFrameHours={stuff['0']['timeframes']}
        playHours={stuff['1']['timeframes']}
        studyHours={stuff['2']['timeframes']}
        exerciseHours={stuff['3']['timeframes']}
        socialHours={stuff['4']['timeframes']}
        selfcareHours={stuff['5']['timeframes']}
    />
    )
}