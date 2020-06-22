const exchangeMoney = require('../models/exchangeMoney');

module.exports = async () => {
  const newConversion = [
    {
      amount: 200,
      from: 'USD',
      to: 'ILS',
      app_price_sell: 700,
      app_price_buy: 697,
      app_saved_money: 2,
      spread: 3,
      bank_price_sell: 691,
      bank_price_buy: 690,
      agency_price_sell: 698,
      agency_price_buy: 696,
      agency_saved_money: 1,
    },
    {
      amount: 1250,
      from: 'ILS',
      to: 'USD',
      app_price_sell: 357,
      app_price_buy: 350,
      app_saved_money: 7,
      spread: 7,
      bank_price_sell: 350,
      bank_price_buy: 340,
      agency_price_sell: 355,
      agency_price_buy: 349,
      agency_saved_money: 5,
    },
    {
      amount: 200,
      from: 'USD',
      to: 'ILS',
      app_price_sell: 700,
      app_price_buy: 697,
      app_saved_money: 5,
      spread: 3,
      bank_price_sell: 691,
      bank_price_buy: 687,
      agency_price_sell: 698,
      agency_price_buy: 692,
      agency_saved_money: 3,
    },
    {
      amount: 1000,
      from: 'USD',
      to: 'ILS',
      app_price_sell: 3549.5,
      app_price_buy: 3520.45,
      app_saved_money: 29,
      spread: 39,
      bank_price_sell: 3520,
      bank_price_buy: 3510,
      agency_price_sell: 3540,
      agency_price_buy: 3510,
      agency_saved_money: 20,
    },
    {
      amount: 100,
      from: 'USD',
      to: 'ILS',
      app_price_sell: 345,
      app_price_buy: 343,
      app_saved_money: 5,
      spread: 2,
      bank_price_sell: 340,
      bank_price_buy: 338,
      agency_price_sell: 342,
      agency_price_buy: 341,
      agency_saved_money: 2,
    },
  ];
  await exchangeMoney.create(newConversion);
};