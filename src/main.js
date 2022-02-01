import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'

import config from './config.js'

import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'

import authWebRouter from './routers/web/auth.js'
import homeWebRouter from './routers/web/home.js'
import infoRouter from './routers/web/info.js'
import productosApiRouter from './routers/api/productos.js'
import randomApiRouter from './routers/api/randoms.js'

import addProductosHandlers from './routers/ws/productos.js'
// import addMensajesHandlers from './routers/ws/mensajes.js'
import passport from 'passport'

import mongoose from 'mongoose'
import dotenv from 'dotenv'




dotenv.config()


const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

io.on('connection', async socket => {
    addProductosHandlers(socket, io.sockets)
    // addMensajesHandlers(socket, io.sockets)
});


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs');


app.use(session({
    store: MongoStore.create({ 
        mongoUrl:'mongodb://localhost/ecommerce',
        mongoOptions:{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
}),
    secret: 'muyimportante',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    },
    rolling: true,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(productosApiRouter)
app.use(randomApiRouter)
app.use(infoRouter)

app.use(authWebRouter)
app.use(homeWebRouter)

mongoose.connect(String(config.mongoRemote.cnxStr), { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if(err) {
      console.error('Error - connection mongo');
    }});




export default httpServer;
