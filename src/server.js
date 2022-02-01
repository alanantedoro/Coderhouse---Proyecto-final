import express from "express"
import cluster from "cluster"
import httpServer from './main.js'
import config from "./config.js"

const app = express()

import os from 'os';

const numCPUs = os.cpus().length


const isCluster = process.argv[2] === 'CLUSTER';


/* MASTER */
if(cluster.isMaster && isCluster) {
    console.log(`Cantidad de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for(let i=0; i<numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}

/* WORKERS */
else {
    const PORT = process.env.PORT || 8080
    const server = httpServer.listen(PORT, () =>
    console.log(
        `Servidor abierto en http://localhost:${PORT}/ - PID: ${process.pid}`,
    ),
);

    server.on('error', (error) => console.log('Error en servidor:', error));
}