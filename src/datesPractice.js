import React, { useState } from "react"
import { DateRangePicker } from 'react-dates';
export default function Dates () {
    const [startDate, setStartDate ] = useState(null)  
    const [endDate, setEndDate ] = useState(null)
    const [focusedInput, setFocusedInput ] = useState(null)

    return (
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => () => {setEndDate(endDate);setStartDate(startDate)}} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            />
    )
}

