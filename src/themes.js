/* Theme light and dark toggle
- Down
- colour design token 
https://webflow.com/blog/best-color-combinations
- 3 themes */
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";



/*colour design token 

#666666  - grey
#141b2d  - blue
#4cceac  - green 
#db4f4a - red 
/////
#666666  - grey 
#E2D1F9 - lavendar
#317773 - teal 
#990011FF - cherry red 
#FCF6F5FF - off white 
///
#B85042 - scarlet 
#E7E8D1, - Light Olive  
#A7BEAE - Light Teal
#C0C2C9 - slate grey
#970C10 - redish 
*/
export const tokens = (mode) = ({
... (mode === 'dark' 
? 
{
// colour design token 
grey: {
    100: "#f2f3f4",
    200: "#e6e7e9",
    300: "#d9dadf",
    400: "#cdced4",
    500: "#c0c2c9",
    600: "#9a9ba1",
    700: "#737479",
    800: "#4d4e50",
    900: "#262728"
},/* slate gray*/
primary: {
    100: "#f1dcd9",
    200: "#e3b9b3",
    300: "#d4968e",
    400: "#c67368",
    500: "#b85042",
    600: "#934035",
    700: "#6e3028",
    800: "#4a201a",
    900: "#25100d"
}, /* scarlet */
oliveAccent: {
    100: "#fafaf6",
    200: "#f5f6ed",
    300: "#f1f1e3",
    400: "#ecedda",
    500: "#e7e8d1",
    600: "#b9baa7",
    700: "#8b8b7d",
    800: "#5c5d54",
    900: "#2e2e2a"
},/* Light Olive */
TealAccent: {
    100: "#edf2ef",
    200: "#dce5df",
    300: "#cad8ce",
    400: "#b9cbbe",
    500: "#a7beae",
    600: "#86988b",
    700: "#647268",
    800: "#434c46",
    900: "#212623"
},/* Light Teal */
darkredAccent: {
    100: "#eacecf",
    200: "#d59e9f",
    300: "#c16d70",
    400: "#ac3d40",
    500: "#970c10",
    600: "#790a0d",
    700: "#5b070a",
    800: "#3c0506",
    900: "#1e0203"
},/* redish*/

} : {


    /* lightmode 
    - ctrl p - > sort line descending 
    */
// colour design token 
grey: {
    100: "#262728",
    200: "#4d4e50",
    300: "#737479",
    400: "#9a9ba1",
    500: "#c0c2c9",
    600: "#cdced4",
    700: "#d9dadf",
    800: "#e6e7e9",
    900: "#f2f3f4",
},/* slate gray*/
primary: {
    100: "#25100d",
    200: "#4a201a",
    300: "#6e3028",
    400: "#934035",
    500: "#b85042",
    600: "#c67368",
    700: "#d4968e",
    800: "#e3b9b3",
    900: "#f1dcd9",
}, /* scarlet */
oliveAccent: {
    100: "#2e2e2a",
    200: "#5c5d54",
    300: "#8b8b7d",
    400: "#b9baa7",
    500: "#e7e8d1",
    600: "#ecedda",
    700: "#f1f1e3",
    800: "#f5f6ed",
    900: "#fafaf6",
},/* Light Olive */
TealAccent: {
    100: "#212623",
    200: "#434c46",
    300: "#647268",
    400: "#86988b",
    500: "#a7beae",
    600: "#b9cbbe",
    700: "#cad8ce",
    800: "#dce5df",
    900: "#edf2ef",
},/* Light Teal */
darkredAccent: {
    100: "#1e0203",
    200: "#3c0506",
    300: "#5b070a",
    400: "#790a0d",
    500: "#970c10",
    600: "#ac3d40",
    700: "#c16d70",
    800: "#d59e9f",
    900: "#eacecf",
},/* redish*/
}
)   
});


//mui theme settings
export const SettingTheme = (mode) => {
    const colors = tokens(mode);
    return{
        palette: {
        mode: mode,
        ...(mode === "dark"
         ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.oliveAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500],
              }, 
          } : {   // palette values for light mode
            primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.oliveAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              }, 
          }
        ),
    },

    typography: {
        fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
            fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
            fontSize: 32,
          },
          h3: {
            fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
            fontSize: 24,
          },
          h4: {
            fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
            fontSize: 20,
          },
          h5: {
            fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
            fontSize: 16,
          },
          h6: {
            fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
            fontSize: 14,
          },
        },
   }
};

// context for color mode
export const ColorContextMode = createContext({
    togglecolorMode: () => {},
});
export const useMemo = () => {
    const [mode, setMode] = useState("dark");
     const colorMode = useMemo(
        () => ({
            togglecolorMode: () =>  setMode((prev === "light" ? "dark" : "light")) 
        }),
        []
     );

     const theme = useMemo(() => createTheme(SettingTheme(mode)), [mode]);
     return [theme, colorMode];
}