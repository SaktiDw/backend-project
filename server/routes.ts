import { Application } from 'express';

import ExampleRouter from './api/controllers/ExampleRouter';
import UserRouter from './api/controllers/UserRouter';
import MatkulRouter from './api/controllers/MatkulRouter';
import AuthRouter from './api/controllers/AuthRouter';
import JurusanRouter from './api/controllers/JurusanRouter';
import ProdiRouter from './api/controllers/ProdiRouter';

export default function routes(app: Application): void {
  app.use('/api/example', ExampleRouter);
  app.use('/api/user', UserRouter);
  app.use('/api/matkul', MatkulRouter);
  app.use('/api/auth', AuthRouter);
  app.use('/api/jurusan', JurusanRouter);
  app.use('/api/prodi', ProdiRouter);
  app.use('/auth', AuthRouter);
};
