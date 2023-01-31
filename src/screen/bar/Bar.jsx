import { Box } from "@mui/material";
import BarChart from "../../Components/BarChart";
import Header from "../../Components/Header";



const Bar = () => {
    return (
      <Box m="20px">
        <Header title="Bar Chart" subtitle="Bar chart information"  />
        <Box  height="85vh">
            <BarChart />
        </Box>
      </Box>
    )
}

export default Bar;