import { Box, useTheme} from "@mui/material";
import GeoChart from "../../Components/GeoChart";
import Header from "../../Components/Header";
import { tokens } from "../../themes";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
      <Box m="20px">
      <Header title="Geography" subtitle="Geography
       chart information"  />
        <Box  height="85vh" border={`2px solid ${colors.grey[100]}`} borderRadius="15px">
       <GeoChart />
        </Box>

  </Box>
    )
}

export default Geography;