const { model } = require("mongoose");
const { OrdersSchema } = require("../schema/OrdersSchema");

const OrdersModel = model("watchlist", OrdersSchema);

module.exports = { OrdersModel };