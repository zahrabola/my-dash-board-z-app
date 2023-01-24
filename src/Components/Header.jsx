import {tokens} from "../../themes";
import { Box, Typography, useTheme } from "@mui/material";
const Header = ({ title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="25px"> 
            <Typography
             variant="h2" 
             color={colors.grey[100]} 
             fontWeight="bold" 
             sx={{ m: "0 0 5px 0"}}
             >
                {title}
            </Typography>
            <Typography 
            variant="h5" 
            color={colors.oliveAccent[400]}
            >
                {subtitle}  
            </Typography>
        </Box>
    )
}

export default Header;