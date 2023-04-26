import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.get('/', (req, res) => {
  res.json({
    data: "Server is working..."
  });
})

import userRoutes from './routes/userRoutes.js';
import otherRoutes from './routes/otherRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
app.use('/api/v1', userRoutes);
app.use('/api/v1', otherRoutes);
app.use('/api/v1', blogRoutes);


export default app;