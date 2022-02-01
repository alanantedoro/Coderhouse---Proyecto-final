import { Router } from 'express'
import { webAuth } from '../../auth/index.js'

import path from 'path'
import logger from 'logger'

const productosWebRouter = new Router()

productosWebRouter.get('/', (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
    res.redirect('/home')
})

productosWebRouter.get('/home', webAuth, (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
    res.render(path.join(process.cwd(), '/views/pages/home.ejs'), {
        nombre: req.user.username,
        email: req.user.email
    })
})

productosWebRouter.get('/productos-vista-test', (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);
    res.sendFile(path.join(process.cwd(), '/views/productos-vista-test.html'))
})

export default productosWebRouter