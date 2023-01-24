import Header from "../../Components/Header";
import { Box, Button,/* IconButton, Typography, */ useTheme } from "@mui/material";
import {tokens} from "../../themes";
/* mockTransactions  */
const Dashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        /*Header */
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Dashboard" subtitle="Welcome, to your Dashboard page."/>
            <Box>
            <Button
            sx={{
              backgroundColor: colors.darkredAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          > </Button>
            </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;