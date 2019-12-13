
const dataParse = (crossFilter, data, indexBy) => {
    let returnedItems = [];

    const keys = getIndex(data, "gender")
    // setItem(data, keys, "education", "gender")

    return setCrossedItems(data, keys, "education", "gender")

    // switch(crossFilter){
        // case("gender"): 
    // setItem(data, keys, crossFilter, indexBy);   
        // case("education"): 
        // returnedItems.push(...setEducation(data, indices));   
    // }   
    // return returnedItems;
}

const getIndex = (data, indexBy) => {
    // Shrinks objects to one single key:value pair specified by the indexBy
    const cleanedArr = data.map(item => item = { [`${indexBy}`]: item[`${indexBy}`] })

    // Reduces down to a set of the possible key:value pairs
    const reducedArr =[...new Set(cleanedArr.map(JSON.stringify))].map(JSON.parse);

    return reducedArr;
    // [{gender: male}, {gender: female}, {gender: null},]
}

// const setGender = (data, indexBy) => {
//     let femaleUsers = {};
//     femaleUsers = {
//         Female: data.filter(trader => trader.gender === "Female").length
//     }

//     let maleUsers = {};
//     maleUsers = {
//         Male: data.filter(trader => trader.gender === "Male").length
//     }

//     return [femaleUsers, maleUsers];
// }

const setCrossedItems = (data, keys, crossFilter, indexBy) => {
    const keysArr = [];
    const crossFilterKeysArr = [];

    const crossFilterKeys = getIndex(data, crossFilter);

    // Puts each value from key:value pair into an array
    // ['Female', 'Male', null]
    keys.forEach(obj => keysArr.push(Object.values(obj)[0]));
    crossFilterKeys.forEach(obj => crossFilterKeysArr.push(Object.values(obj)[0]));

    // For each object in the array, 
    keysArr.forEach((key, index) => {
        // Gets every trader at the index where it equals the value in the arr
       const filtered = data.filter(trader => trader[`${indexBy}`] === key)
       console.log("filtered", filtered)

        // 
        const crossFilteredData = [];
        crossFilterKeysArr.forEach((key, index) => {
            const crossFiltered = filtered.filter(trader => trader[`${crossFilter}`] === key)
            crossFilteredData.push({ [`${key}`]: crossFiltered.length })
        })

        crossFilteredData.forEach(obj => keys[index] = {...keys[index], [`${Object.keys(obj)[0]}`]: [`${Object.values(obj)[0]}`][0] } )
    })
    console.log (" KEY ", keys)
    keys.forEach(obj => obj[`${indexBy}`] === null && (obj[`${indexBy}`] = "No Response"))
    return keys;
};

const setItem = (data, keys, indexBy) => {
    const arr = [];

    // Puts each value from key:value pair into an array
    // ['Female', 'Male', null]
    keys.forEach(obj => arr.push(Object.values(obj)[0]))

    // For each object in the array, 
    arr.forEach((key, index) => {
        // Gets every trader at the index where it equals the value in the arr
       const filtered = data.filter(trader => trader[`${indexBy}`] === key).length

       keys[index] = {
            ...keys[index],
            [`${arr[index]}`]: filtered
        }
    })
    return keys;
};

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