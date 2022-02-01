import { Router } from 'express';
import os from 'os';
import compression from 'compression';
import logger from 'logger'

const infoRouter = new Router();

const numCPUs = os.cpus().length

infoRouter.get('/info', (req, res) => {
    const info = {
        argv: process.argv.slice(2),
        platform: process.platform,
        version: process.version,
        memory: process.memoryUsage().rss,
        executable: process.execPath,
        pid: process.pid,
        path: process.cwd(),
        cpus: numCPUs,
    }

    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);

    console.log('Sincronico, demora y bloquea la ejecucion del resto del codigo')
    
    res.render( 'pages/info', { info } );
});

infoRouter.get('/infozip', compression(), (req, res) => {
    const info = {
        argv: process.argv.slice(2),
        platform: process.platform,
        version: process.version,
        memory: process.memoryUsage().rss,
        executable: process.execPath,
        pid: process.pid,
        path: process.cwd(),
        cpus: numCPUs,
    }
    res.render( 'pages/info', { info } );
});


export default infoRouter