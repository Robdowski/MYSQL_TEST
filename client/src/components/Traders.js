import React from "react";

class Traders extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
           <div>
               {
                   this.props.data.map(trader => (
                       <div>
                           {trader.cell_num}
                       </div>
                   ))
               }
           </div>
        )
    }
};

export default Traders