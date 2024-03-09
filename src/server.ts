import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { logger, errorlogger } from './shared/logger';
import { Server } from 'http';

//occured Syncronously due to an error by developer
process.on('uncaughtException', err => {
  errorlogger.error(err);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database connection successfull');

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    errorlogger.error('Failed to connect database', error);
  }

  //for async functions or promise, caused by external database/servers. Nothing to do in our code
  process.on('unhandledRejection', err => {
    console.log('Unhandled rejection is detected. We are closing our server..');
    if (server) {
      server.close(() => {
        errorlogger.error(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
bootstrap();

//Closing the server on receieving Termination Signal
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
