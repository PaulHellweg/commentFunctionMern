const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();

//axios  Middleware
app.use(axios.json());

