/* Faq page is a standard accordion   */
import { Box,Typography, useTheme } from "@mui/material";
import {tokens} from "../../themes";
import Header from "../../Components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Box m="20px">
        <Header title="FAQ" subtitle="Frequently asked questions page" />
         <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                    First Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
       {/* 2 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                   Second Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
               {/* 3 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                   Third Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
               {/* 4 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                   Fourth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
               {/* 5 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                   Fifth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
               {/* 6 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                   Sixth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
               {/* 7 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                   Seventh Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
               {/* 8 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                  Eighth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
                {/* 9 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                  Ninth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>
                {/* 10 */}
       <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}   sx={{ backgroundColor: colors.darkredAccent[600], }}>
                <Typography color={colors.oliveAccent[500]} variant="h5">
                  Tenth Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: colors.primary[500], borderBottom: "none",}} >
                <Typography color={colors.grey[100]} variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
         </Accordion>











      </Box>
    )
}

export default FAQ;