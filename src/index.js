/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import videoRoutes from './routes/VideoRoutes';
import eventRoutes from './routes/EventRoutes';
import userRoutes from './routes/UserRoutes';
import blogRoutes from './routes/blogRoutes';

const app = express();

app.enable('trust proxy');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/api/v1/videos', videoRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/auth', userRoutes);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));

export default app;
