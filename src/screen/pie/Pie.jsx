import { Box } from "@mui/material";
import Header from "../../Components/Header";
import PieChart from "../../Components/PieChart";

const Pie = () => {
    return (
  <Box m="20px">
      <Header title="Pie Chart" subtitle="Pie chart information"  />
        <Box  height="85vh">
            <PieChart />
        </Box>

  </Box>
    )
}

export default Pie;