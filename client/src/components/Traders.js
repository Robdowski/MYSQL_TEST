import React from "react";
import { data } from "../data"
import { ResponsiveBar } from "@nivo/bar"

class Traders extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.tradersUsers)
        return (
           <div className="App">
               <ResponsiveBar
                    data={[{male: "8", women: "9"}]}
                    indexBy="id"
                    keys={[ 'hot dog', 'burger', 'sandwich', 'fries', 'donut' ]}
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
    }
};

export default Traders