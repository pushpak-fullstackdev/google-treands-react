import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { useEffect, useState } from 'react';
export const Topbar = ({setValue, updateChartType, updateError}) => {
    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());
    const [text, changeText] = useState('');
    const [chatType, changeChartType] = useState('LineChart');

    
    const formatDate = input => `${input.getFullYear()}-${(input.getMonth() + 1) < 10 ? `0${input.getMonth() + 1}` : input.getMonth() + 1}-${input.getDate()}`

    return (
        <>
        <div>
            <DatePicker
                disableToolbar
                variant="inline"
                label="Start Date"
                format="d MMM yyyy"
                value={selectedStartDate}
                onChange={(value) => {
                    console.log(new Date(value));
                    handleStartDateChange(value)
                }}
              />
        </div>
        <div>
                <DatePicker
                    disableToolbar
                    variant="inline"
                    format="d MMM yyyy"
                    label="End Date"
                    value={selectedEndDate}
                    onChange={handleEndDateChange}
                  />
        </div>
        <div>
            <TextField 
            onChange={(e) => changeText(e.target.value)}
            value={text}
            id="standard-basic" label="Search Text" />
        </div>
        <div className="align-center">
        <Button 
        onClick={() => {
            if (text.length === 0 || !selectedStartDate || !selectedEndDate) {
              updateError(true)
            } else {
              updateError(false);              
            }
            setValue({
              startDate: formatDate(selectedStartDate),
              endDate: formatDate(selectedEndDate),
              text
          })
        }}
        
        variant="contained" color="primary">
            Search
        </Button>
        </div>
        <div className="align-center">
        <Select
          value={chatType}
          onChange={(e) => {
              console.log(e.target.value);
            changeChartType(e.target.value);
            updateChartType(e.target.value);
          }}
        >
          <MenuItem value={"LineChart"}>Line</MenuItem>
          <MenuItem value={"Bar"}>Bar</MenuItem>
        </Select>
        </div>
        </>
        )
}