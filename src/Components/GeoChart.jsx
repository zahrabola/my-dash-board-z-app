import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from "@mui/material";
import { tokens } from "../themes";
import {  mockGeographyData as data } from "../data/DataMock";
import { geoFeatures } from "../data/MockGeoFeatures";

const GeoChart = ({isDashboard = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <ResponsiveChoropleth
        data={data}
        //theme-added
        theme={{
            tooltip: {
                container: {
                    background: colors.TealAccent[800],
                    color: colors.grey[100],
                    fontSize: 12
                }, 
            },
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
           
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        //theme-added
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[ 0, 0, 0 ]}
       /* enableGraticule={true}
        graticuleLineColor="#dddddd" */
        borderWidth={1.5}
        borderColor="#fffff"
        legends={
            !isDashboard ? 
            [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]
        : undefined
    }
    />
    )
}

export default GeoChart