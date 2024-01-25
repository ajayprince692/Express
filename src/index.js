// let express = require('express')
import express from "express";
import appRoutes from './routes/index.js'
let app = express();
let port = 7000;

app.use('/',appRoutes)
app.use('/user',appRoutes)

app.listen(port,()=> console.log(`server listening to ${port}`));
