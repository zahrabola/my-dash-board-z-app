import { Box, Typography, List, ListItem, ListItemText,useTheme } from "@mui/material";
import {tokens} from "../../themes";
import Header from "../../Components/Header";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useState } from "react";
const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentevent, setCurrentEvents]= useState([])

  const handleClickData= (selected) => {
    const title = prompt("Please enter a new title for your event") /* promnt is js function alert popup */
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); 

    if(title){
      calendarApi.addEvent({
        id:`${selected.dateStr}-${title}`,
        title,
        start:selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }
   const handleClickEvent = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
   }



    return (
      <Box m="20px">
          <Header title="Calendar" subtitle="Full calendar interactive page" />


      </Box>
    )
}

export default Calendar;