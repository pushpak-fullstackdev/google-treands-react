import { Button, TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { useState } from 'react';
import { search } from "../services/api";
export const Topbar = ({setValue}) => {
    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());
    const [text, changeText] = useState('');


    return (
        <>
        <div>
            <DatePicker
                disableToolbar
                variant="inline"
                label="Start Date"
                value={selectedStartDate}
                onChange={handleStartDateChange}
              />
        </div>
        <div>
                <DatePicker
                    disableToolbar
                    variant="inline"
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
            search().then(value => {
            value.json().then(jsonValue => {
                setValue(jsonValue)
            });
            })
        }}
        
        variant="contained" color="primary">
            Primary
        </Button>
        </div>
        </>
        )
}