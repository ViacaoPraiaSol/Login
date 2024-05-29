"use strict";
require("dotenv/config");
const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;
const config = {
    //"development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
    //},
    /*"test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "postgres"
    }*/
};
module.exports = config;
