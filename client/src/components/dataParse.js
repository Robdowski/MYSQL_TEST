
const dataParse = (arg, data, indexBy) => {
    let returnedItems = [];


    const indices = getIndex(data, "gender", returnedItems)

    switch(arg){
        case("gender"): 
        returnedItems.push(...setGender(data, indexBy, returnedItems));   
        case("education"): 
        // returnedItems.push(...setEducation(data, indices));   
    }   
    return returnedItems;
}

const getIndex = (data, indexBy, array) => {
    const cleanedArr = data.map(item => item = { [`${indexBy}`]: item[`${indexBy}`] })

    const reducedArr =[...new Set(cleanedArr.map(JSON.stringify))].map(JSON.parse);

    return reducedArr;
}

const setGender = (data, indexBy, array) => {
    let femaleUsers = {};
    femaleUsers = {
        gender: "Female",
        Female: data.filter(trader => trader.gender === "Female").length
    }

    let maleUsers = {};
    maleUsers = {
        gender: "Male",
        Male: data.filter(trader => trader.gender === "Male").length
    }

    return [femaleUsers, maleUsers];
}

// const setEducation = (data, indexBy, array) => {
//     let femaleUsers = {};
//     Primary = {
//         Primary: data.filter(trader => trader.gender === "Primary").length
//     }

//     let maleUsers = {};
//     maleUsers = {
//         gender: "Male",
//         Male: data.filter(trader => trader.gender === "Male").length
//     }

//     return [femaleUsers, maleUsers];
// }


export default dataParse