/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import videoRoutes from './routes/VideoRoutes';
import eventRoutes from './routes/EventRoutes';

const app = express();

app.enable('trust proxy');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'NodeJS - Express - Postgres - Sequelize App Template',
  });
});

const PORT = process.env.PORT || 3000;

app.use('/api/v1/videos', videoRoutes);
app.use('/api/v1/events', eventRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

export default app;
