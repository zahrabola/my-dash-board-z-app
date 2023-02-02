import Header from "../../Components/Header";
import { Box, Button,IconButton, Typography, useTheme } from "@mui/material";
import {tokens} from "../../themes";
import { mockTransactions } from "../../data/DataMock"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatisticsBox from "../../Components/StatisticsBox";
import LineChart from "../../Components/LineChart";
import ProgressCircle from "../../Components/ProgressCircle";
import BarChart from "../../Components/BarChart";
import GeoChart from "../../Components/GeoChart";


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
              backgroundColor: colors.TealAccent[700],
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
        </Box>
        {/* Grid and charts */}

        <Box display="grid" gridAutoRows="160px" gridTemplateColumns="repeat(12, 1fr)" gap="20px" mb="20px">
                  {/* Row 1 */}
          <Box 
           gridColumn="span 3"
           backgroundColor={colors.primary[600]} 
           display="flex" 
           alignItems="center"
           justifyContent="center">
            <StatisticsBox
            title="10,250" 
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon sx={{ color: colors.oliveAccent[600], fontSize:"26px"}} />
            }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[600]} 
            display="flex" 
            alignItems="center"
            justifyContent="center">
            <StatisticsBox 
              title="145,650" 
              subtitle="Sales obtained"
              progress="0.5"
              increase="+20%"
              icon={ 
                   <PointOfSaleIcon sx={{ color: colors.oliveAccent[600], fontSize:"26px"}}  />
                  }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[600]} 
            display="flex" 
            alignItems="center"
            justifyContent="center">
            <StatisticsBox 
            title="45,400" 
            subtitle="New Clients"
            progress="0.3"
            increase="+5%"
            icon={
              <PersonAddIcon sx={{ color: colors.oliveAccent[600], fontSize:"26px"}}/>
            }
            />
           
          </Box>
          <Box 
            gridColumn="span 3"
            backgroundColor={colors.primary[600]} 
            display="flex" 
            alignItems="center"
            justifyContent="center">
            <StatisticsBox
             title="1,600,850" 
             subtitle="Traffic Received"
             progress="0.8"
             increase="+32%"
             icon={
              <TrafficIcon sx={{ color: colors.oliveAccent[600], fontSize:"26px"}} />
             }
            />
          </Box>
          {/*row 2 */}
          <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[600]}>
           <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center" >
            <Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              >
              Revenue Generated
              </Typography>
              <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.oliveAccent[100]}
              >
                £59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontsize: "26px", color: colors.oliveAccent[500]}}/>
              </IconButton>
            </Box>
           </Box>
           <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
           </Box>
         </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          overflow="auto"
          >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={ `4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
            >
           <Typography  color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
           </Typography>
          </Box>
           {  mockTransactions.map((transaction, i) => (
              <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
               >
              <Box>
              <Typography
              color={colors.oliveAccent[500]}
              variant="h5"
              fontWeight="600"
              >
              {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
              {transaction.user}
              </Typography>
              </Box>
              <Box color={colors.grey[100]}>
              {transaction.date}
              </Box>
              <Box backgroundColor={colors.oliveAccent[600]} p="5px 10px" borderRadius="4px">
              £{transaction.cost}
              </Box>
            </Box>
           ))} 
          </Box>
           {/*row 3 */}
          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          p="30px" 
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            >
             <ProgressCircle size="125px" />
              <Typography
              variant="h5"
              color={colors.oliveAccent[500]}
              sx={{ mt: "15px"}}
              >
                £45,352 revenue generated
              </Typography>
              <Typography>
              Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          >
            <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px"}}
            >
            Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          padding="30px"
          >
          <Typography
          variant="h5"
          fontWeight="600"
          sx={{ marginBottom: "15px"}}
          >
            Geography based traffic
            </Typography>
            <Box height="270px" >
              <GeoChart/>
            </Box>
          </Box>
        </Box>
      </Box>  
    )
}

export default Dashboard;