import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { Grid, Typography, Divider, Hidden, Box } from "@material-ui/core";

import "./style.css";

const Calendar = (props) => {
  const { darkMode } = props;
  const events = [
    {
      title: "ABC",
      start:"2022-09-28T11:00:00"
    },
    {
      title: "XYZ",
      start: "2022-08-31T18:00:00"
    },
    {
      title:"PQR",
      start:"2022-09-12T14:00:00"
    },
  ];

  const eventClick = function (info) {
    info.jsEvent.preventDefault();

    if (info.event.url) {
      window.open(info.event.url);
    }
  };

  return (
    <div id="Calendar">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">Events Calendar</Box>
          </Typography>
          <Hidden xsDown={true}>
            <FullCalendar
              dayHeaderClassNames={darkMode ? "fc-widget-header" : ""}
              height="auto"
              plugins={[dayGridPlugin]}
              initialView={"dayGridMonth"}
              events={events}
              eventClick={eventClick}
              eventColor="#c62828"
              eventDisplay="block"
              displayEventEnd={true}
            />
          </Hidden>
          <Hidden smUp={true}>
            <FullCalendar
              height="auto"
              plugins={[listPlugin]}
              initialView={"listMonth"}
              events={events}
              eventClick={eventClick}
              eventColor="#c62828"
              eventDisplay="block"
              displayEventEnd={true}
            />
          </Hidden>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Calendar;
