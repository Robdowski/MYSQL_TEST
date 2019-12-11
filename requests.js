const data = require("./model_data/model");

const getLanceData = async args => {
  const lanceData = await data.getData();
  if (args.request_value) {
    const { request_value } = args;
    return lanceData.filter(trader => trader.request_value === request_value);
  } else return lanceData;
};

const getTraderUsers = async args => {
    let traderUsers = []
    if (args.length === 1){
        traderUsers = await data.getUsersBy(args)
    } else {
        traderUsers = await data.getUsers();
    }

    let filtered = traderUsers;
    for (let arg in args) {
        console.log(args[arg])
        filtered = filtered.filter(trader => trader[arg] === args[arg] )
    }
    return filtered;
}

module.exports = {
  getLanceData,
  getTraderUsers
};
