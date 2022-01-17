import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";

import React from "react";
import { Typography, Grid } from "@material-ui/core";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

function RentalDates(props) {
  const { selectedDate, handleDateChange } = props;

  return (
    <React.Fragment>
      <Typography variant="h5" className="capitalize selector-title">
        Date
      </Typography>

      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="center">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              className="date-picker"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    </React.Fragment>
  );
}

export default RentalDates;
