import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost";
import { ResponsiveBar } from "@nivo/bar"
import Traders from "./Traders"

const TRADERS_QUERY = gql`
   query getUsers($age: String){
        tradersUsers(age: $age) {
            id
            age
            gender
            education
        }
       
    }
`;

const GetData = () => {
    const [variables, setVariables] = useState({});
    const { loading, error, data } = useQuery(TRADERS_QUERY, {
        variables: variables
    });

    if (loading) return <h1> Loading... </h1>

    return (
        <div>
            <Traders data={data.tradersUsers} />
            <button onClick={(e) => !variables.hasOwnProperty("age") ? setVariables({age: "40-50"}) : setVariables({})}>change state</button>
            {
                data.tradersUsers.map(trader => (
                    console.log(trader)
                ))
            }
        </div>
    )
}

export default GetData