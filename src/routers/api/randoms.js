import { Router } from 'express'
import { fork } from 'child_process'
import logger from 'logger'


const DEFAULT_CANT = 10;

const randomsApiRouter = new Router()

randomsApiRouter.get('/health', (req, res) => {
  res.json({ date: new Date().toLocaleString() })
});

randomsApiRouter.get('/api/randoms', (req, res) => {
  const { cant = DEFAULT_CANT } = req.query;
  // const computo = fork('./src/utils/countRandomNumbers.js')

  logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: response success`);

/*  computo.on('message', msg => {
    if (msg == 'listo') {
        computo.send(cant);
    } else {
        res.send(msg);
    }
  });
*/

res.send({ status: 'ok'});
});

export default randomsApiRouter;