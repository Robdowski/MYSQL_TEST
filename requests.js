const data = require('./model_data/model')

const getLanceData = async args => {
  const lanceData = await data.getData();
  if (args.request_value) {
    const { request_value } = args;
    return lanceData.filter(trader => trader.request_value === request_value);
  } else return lanceData;
};


const getTraderUsers = async args => {
  let filtered = [];
  const traderUsers = await data.getUsers();
  if (args.gender) {
    const { gender } = args;
    filtered = traderUsers.filter(trader => trader.gender === gender);
  }

  if (args.age) {
    const { age } = args;
    filtered = filtered.filter(trader => trader.age === age);
  }
  return filtered;
};

module.exports = {
  getLanceData,
  getTraderUsers
};
