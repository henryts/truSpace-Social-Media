import express, {Application,NextFunction} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import configKeys  from '../../../../config';
import bodyParser from 'body-parser';
 
const expressConfig= (app:Application)=>{
  app.use(express.json());
  app.use(bodyParser.json({limit:'10mb'}));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan('dev'));
  app.use(
    cookieSession({
      name: 'session',
      keys: ['1234'],
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
  );
  const corsOptions = {
    origin: '*',
    exposedHeaders: [
      'Cross-Origin-Opener-Policy',
      'Cross-Origin-Resource-Policy',
    ],
  };

  app.use(cors(corsOptions));

}

export default expressConfig;