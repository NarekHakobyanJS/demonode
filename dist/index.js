"use strict";
// import express from 'express';
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('to you');
});
app.listen(3003);
