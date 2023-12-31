import {Server} from 'http';
import configKeys from '../../../../config';

const port = configKeys.PORT||5000
const serverConfig = (server:Server)=>{
    const startServer = () =>{
        server.listen(port,()=>{
            console.log(`Server listening on Port ${port}`);
        })
    };
    return {
        startServer,
    };

};
export default serverConfig;