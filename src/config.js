import { createRequire } from "module";
const require = createRequire(import.meta.url);

import dotenv from 'dotenv'
dotenv.config();

const yargs = require('yargs/yargs')(process.argv.slice(2));

const argv = yargs
                .alias({
                    p: 'port'
                })
                .default({
                    port: 8081
                })
                .argv;

export default {
    mongoRemote: {
        cnxStr: process.env.MONGO_REMOTE_CNXSTR
    },
    fileSystem: {
        path: process.env.FS_PATH
    },
    PORT: argv.port,
    MODE_SERVER: argv.mode
}