import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar"

const Graph = props => {
console.log(props.chartData)
        return (
           <div className="Graph-Container">
              <ResponsiveBar
                data={[
                    {
                      "gender": "Male",
                      "Primary": 80,
                      "Secondary": 80,
                      "None": 80,
                      "College": 100,
                    },
                    {
                      "gender": "Female",
                      "Male": 180,
                      "Female": 120,
                    },
                    {
                      "gender": "Null",
                      "Male": 180,
                      "Female": 120,
                    },
                    {
                      "country": "AE",
                      "hot dog": 102,
                      "hot dogColor": "hsl(6, 70%, 50%)",
                      "burger": 8,
                      "burgerColor": "hsl(348, 70%, 50%)",
                      "sandwich": 84,
                      "sandwichColor": "hsl(138, 70%, 50%)",
                      "kebab": 191,
                      "kebabColor": "hsl(247, 70%, 50%)",
                      "fries": 170,
                      "friesColor": "hsl(70, 70%, 50%)",
                      "donut": 163,
                      "donutColor": "hsl(121, 70%, 50%)"
                    },
                    {
                      "country": "AF",
                      "hot dog": 62,
                      "hot dogColor": "hsl(109, 70%, 50%)",
                      "burger": 196,
                      "burgerColor": "hsl(274, 70%, 50%)",
                      "sandwich": 107,
                      "sandwichColor": "hsl(283, 70%, 50%)",
                      "kebab": 99,
                      "kebabColor": "hsl(104, 70%, 50%)",
                      "fries": 66,
                      "friesColor": "hsl(89, 70%, 50%)",
                      "donut": 176,
                      "donutColor": "hsl(319, 70%, 50%)"
                    },
                    {
                      "country": "AG",
                      "hot dog": 94,
                      "hot dogColor": "hsl(213, 70%, 50%)",
                      "burger": 2,
                      "burgerColor": "hsl(134, 70%, 50%)",
                      "sandwich": 76,
                      "sandwichColor": "hsl(117, 70%, 50%)",
                      "kebab": 121,
                      "kebabColor": "hsl(12, 70%, 50%)",
                      "fries": 136,
                      "friesColor": "hsl(73, 70%, 50%)",
                      "donut": 147,
                      "donutColor": "hsl(331, 70%, 50%)"
                    },
                    {
                      "country": "AI",
                      "hot dog": 104,
                      "hot dogColor": "hsl(91, 70%, 50%)",
                      "burger": 175,
                      "burgerColor": "hsl(256, 70%, 50%)",
                      "sandwich": 70,
                      "sandwichColor": "hsl(136, 70%, 50%)",
                      "kebab": 198,
                      "kebabColor": "hsl(71, 70%, 50%)",
                      "fries": 148,
                      "friesColor": "hsl(65, 70%, 50%)",
                      "donut": 188,
                      "donutColor": "hsl(138, 70%, 50%)"
                    },
                    {
                      "country": "AL",
                      "hot dog": 154,
                      "hot dogColor": "hsl(250, 70%, 50%)",
                      "burger": 4,
                      "burgerColor": "hsl(103, 70%, 50%)",
                      "sandwich": 183,
                      "sandwichColor": "hsl(83, 70%, 50%)",
                      "kebab": 116,
                      "kebabColor": "hsl(164, 70%, 50%)",
                      "fries": 182,
                      "friesColor": "hsl(329, 70%, 50%)",
                      "donut": 111,
                      "donutColor": "hsl(124, 70%, 50%)"
                    },
                    {
                      "country": "AM",
                      "hot dog": 144,
                      "hot dogColor": "hsl(200, 70%, 50%)",
                      "burger": 70,
                      "burgerColor": "hsl(342, 70%, 50%)",
                      "sandwich": 107,
                      "sandwichColor": "hsl(110, 70%, 50%)",
                      "kebab": 117,
                      "kebabColor": "hsl(160, 70%, 50%)",
                      "fries": 114,
                      "friesColor": "hsl(184, 70%, 50%)",
                      "donut": 126,
                      "donutColor": "hsl(17, 70%, 50%)"
                    }
                  ]}
                  keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                indexBy="country"
                groupMode={"grouped"}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Gender',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
           </div>
        )
};

export default Graph