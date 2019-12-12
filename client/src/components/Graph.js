import React, { useEffect, useState } from "react";
import { data } from "../data"
import { ResponsiveBar } from "@nivo/bar"

const Graph = props => {

        const [maleUsers, setMaleUsers] = useState({
            gender: "Male",
            Male: 0,
        })

        const [femaleUsers, setFemaleUsers] = useState({
            gender: "Female",
            Female: 0,
        })

        useEffect(() => {
            console.log(countUsers());
        }, []);
    
        const countUsers = () => {
            props.data.forEach(trader => {
                if (trader.gender === "Male") {
                    setMaleUsers({
                        ...maleUsers,
                        Male: maleUsers.Male += 1
                    })
                } 
                
                if (trader.gender === "Female") {
                    setFemaleUsers({
                        ...femaleUsers,
                        Female: femaleUsers.Female += 1
                    })
                }
            })

            console.log("male", maleUsers, "female", femaleUsers)
        }
        
        return (
           <div className="App">
              <ResponsiveBar
                data={[maleUsers, femaleUsers]}
                keys={[ 'Male', 'Female', 'sandwich', 'kebab', 'fries', 'donut' ]}
                indexBy="gender"
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