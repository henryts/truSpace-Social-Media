import express, {Application,NextFunction} from 'express';
import connectDB from './frameworks/database/mongodb/connection';
import http from 'http';
import serverConfig from './frameworks/database/mongodb/webserver/server';
import expressConfig from './frameworks/database/mongodb/webserver/express';



const app: Application=express();
const server = http.createServer(app);
connectDB();
expressConfig(app);
serverConfig(server).startServer();