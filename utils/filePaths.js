const path = require('path');

// Input Files
const customersFilePath = path.join(__dirname, '../data/customers.csv');
const productsFilePath = path.join(__dirname, '../data/products.csv');
const ordersFilePath = path.join(__dirname, '../data/orders.csv');

// Output Files
const orderPricesFilePath = path.join(__dirname, '../data/order_prices.csv');
const productCustomersFilePath = path.join(__dirname, '../data/product_customers.csv');
const customerRankingFilePath = path.join(__dirname, '../data/customer_ranking.csv');

// Export Files
module.exports = {
    customersFilePath,
    productsFilePath,
    ordersFilePath,
    orderPricesFilePath,
    productCustomersFilePath,
    customerRankingFilePath,
};
