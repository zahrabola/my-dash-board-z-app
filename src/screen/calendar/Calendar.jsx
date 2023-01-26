import { Box, Typography, List, ListItem, ListItemText,useTheme } from "@mui/material";
import {tokens} from "../../themes";
import Header from "../../Components/Header";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core'
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
          <Box>

          {/* sidebar - calendar */}
          <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
            <Typography>
              Events
            </Typography>
            <List>
              {currentevent.map((event) => 
              <ListItem 
              key={event.id}
              sx={{
                backgroundColor: colors.oliveAccent[500],
                margin:"10px 0",
                borderRadius:"2px",
              }}
              >
               <ListItemText 
               primary={event.title}
               secondary={
                <Typography
                >
                  {formatDate(event.start,{
                    day: "numeric",
                    month: "short",
                    year:"numeric",
                    
                  })}
                </Typography>
               }
               />
              </ListItem>
              )}
            </List>
          </Box>


           {/*Calendar*/}
           <Box flex="1 1 100%" ml="15px" mt="10px"   >
            <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left:"prev,next today",
              center: "title",
              right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
          
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleClickData}
            eventClick={handleClickEvent}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents ={[
              {
                id:"12315",
                title:"All-day event",
                date:"26-01-2022"
              },
              {
                id:"523",
                title:"Timed eventt",
                date:"31-01-2022"
              },
            ]}
            />
          </Box>
       </Box>
     </Box>
   )
}

export default Calendar;