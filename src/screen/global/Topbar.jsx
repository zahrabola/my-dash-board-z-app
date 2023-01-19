/* search bar and top - buttons  */
import {ColorContextMode, tokens} from "../../themes";
import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"; 


const Topbar = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const colorMode = useContext(ColorContextMode)
/* */
return (
    <Box display="flex" justifyContent="space-between" p={3}>
        {/*search bar */}
        <Box display="flex" borderRadius="5px" backgroundColor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{p: 1}}>
            <SearchIcon />
        </IconButton>
        </Box>
          
          {/* icons - conditional rendering*/}
          <Box display="flex">
            <IconButton onClick={colorMode.togglecolorMode}>
                {theme.palette.mode === 'dark' ? (
                   <DarkModeOutlinedIcon /> 
                ) : (

                    <LightModeOutlinedIcon />
                )}
               
            </IconButton> 
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>


          </Box>
    </Box>
    
)
}
export default Topbar;