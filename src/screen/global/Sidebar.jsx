/*  side bar and items  */
import { useState } from "react";
//import {  Menu, MenuItem } from "react-pro-sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import {Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {tokens} from "../../themes";
///import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
/*icons */
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


////item 

const Item = ({ title, to, icon, isselected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={isselected === title}
        style={{
          color: colors.grey[400],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
         
        <Typography>{title}</Typography>
        <Link to={to}/> 
      </MenuItem>
   
      
    );
  
  };
 
  
  const Sidebar = () => {
    const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [isCollapsed, setisCollapsed] = useState(false) /// collapsed represent weather or not the side bar is collapsed 
const [isselected, setSelected] = useState("Dashboard");// selected is what page we are currently on 

    return (
      <Box sx={{
        "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,   
        },
        "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
        },
         "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
            color:"#c67368 !important", 
        },
        "& . pro-menu-item.active": {
            color: "#d59e9f !important",
        }
      }}> 
      <ProSidebarProvider collapsed={isCollapsed}>
        {/* logo and menu items */}
        <Menu  iconShape="square">
            <MenuItem onClick={() => setisCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon />: undefined }
            style={{
                margin:"10px 0 20px 0",
                color: colors.darkredAccent[200],
            }}
        >
  {/* not collased*/}   {!isCollapsed && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                    <Typography variant="h3"  color={colors.darkredAccent[200]}>
                        Admin
                    </Typography>
                    <IconButton onClick={() => setisCollapsed(!isCollapsed)} >
                    <MenuOutlinedIcon />
                    </IconButton>
                </Box>
            )}
            </MenuItem>
         {!isCollapsed && (
                <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img alt="userprofile"
                         width="120px"
                         height="120px" 
                         src="https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                         style={{ cursor: "pointer", borderRadius:"50%"}}
                         />
                    </Box>
                <Box textAlign="center">
                    <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                        Zahra Olanrewaju
                    </Typography>
                    <Typography variant="h5" color={colors.oliveAccent[300]}>
                   Admin
                    </Typography>
                </Box>
                </Box>
            )}

{/* items */}
<Box paddingLeft={isCollapsed ? undefined : "10%"}>
           <Link to="/" href="#/">
           <Item  
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
            </Link>           
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            
            <Link to="/team">
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
            </Link>
            <Link to="/contacts">
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
            </Link>
           <Link  to="/invoices">
           <Item
              title="Invoices Balances"
             
              icon={<ReceiptOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
           </Link>
           

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Link to="/form">
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
            </Link>
          <Link to="/calendar">
          <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
          </Link>
           <Link to="/faq">
           <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
           </Link>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Link to="/bar">
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
            </Link>
           <Link to="/pie">
           <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
           </Link>
            <Link to="/line">
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
            </Link>
            
             <Link to="/geography">
             <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              isselected={isselected}
              setSelected={setSelected}
            />
             </Link>
            
          </Box>
        </Menu>
      </ProSidebarProvider>
      </Box>
    );
  };
  
  export default Sidebar;