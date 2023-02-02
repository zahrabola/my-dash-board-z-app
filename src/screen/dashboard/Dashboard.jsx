import Header from "../../Components/Header";
import { Box, Button,IconButton, Typography, useTheme } from "@mui/material";
import {tokens} from "../../themes";
import { mockTransactions  as data } from "../data/DataMock";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatisticsBox from "../../Components/StatisticsBox";


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
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
        {/* Grid and charts */}

        <Box>
                  {/* Row 1 */}
          <Box>
            <StatisticsBox />
            <EmailIcon />
          </Box>
          <Box>
            <StatisticsBox />
            <PointOfSaleIcon />
          </Box>
          <Box>
            <StatisticsBox />
            <PersonAddIcon/>
          </Box>
          <Box>
            <StatisticsBox />
            <TrafficIcon />
          </Box>
              {/* Row 2 */}

        </Box>
      </Box>  
    </Box>
    )
}

export default Dashboard;