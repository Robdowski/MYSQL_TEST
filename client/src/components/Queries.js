import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Traders from "./Traders"

const TRADERS_QUERY = gql`
    query TRADERS_QUERY {
        tradersUsers(age: "10-20") {
            age
            gender
            education
        }
    }
`;

class Queries extends React.Component {
    constructor(){
        super();
        this.state = {
            traderData: []
        }
    }

    render(){
        return (
            <Query query={TRADERS_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h2>Loading...</h2>
                        if (error) console.log(error)
                        console.log(data)
                        return <Traders data={data.tradersData} /> // Your component would receive data as props. Maybe the component rendering charts?
                    }
                }
            </Query>
        )
    }
};

export default Queries