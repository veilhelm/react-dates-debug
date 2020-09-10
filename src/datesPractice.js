import React, { useState } from "react"
import { DateRangePicker } from 'react-dates';
import moment from "moment"

export default function Dates () {
    const [startDate, setStartDate ] = useState(null)  
    const [endDate, setEndDate ] = useState(null)
    const [focusedInput, setFocusedInput ] = useState(null)

    const blockedDatesFromDb = [
        {
        initialDate: "2020-09-09",
        finalDate: "2020-09-11"
     },
        {
        initialDate: "2020-09-15",
        finalDate: "2020-09-20"
     }
    ]

    let blockDays = []
    
    blockedDatesFromDb.forEach( ({initialDate, finalDate}) => {
        const inDate = moment(initialDate,"YYYY-MM-DD")
        const finDate = moment(finalDate,"YYYY-MM-DD")
        let diffDates = finDate.diff(inDate, "days")
        diffDates = Math.abs(diffDates)
        for(let i = 0; i <= diffDates; i++ ){
            blockDays.push(inDate.add(i,"days"))
        }
    })
    

    const isDayBlocked = (day) => {console.log(blockDays) ; return blockDays.includes(day)} 


    return (
        <div style={{float: 'right'}}>
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => () => {setEndDate(endDate);setStartDate(startDate)}} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                openDirection="down"
                orientation="vertical"
                anchorDirection="right" 
                numberOfMonths={2}
                verticalHeight={400}
                isDayBlocked={isDayBlocked}
                autoFocus
                />
        </div>
    )
}

