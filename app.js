import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
  //origin: "https://green-books.netlify.app",
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

import userRoutes from './routes/userRoutes.js';
import otherRoutes from './routes/otherRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
app.use('/api/v1', userRoutes);
app.use('/api/v1', otherRoutes);
app.use('/api/v1', blogRoutes);


app.get('/', (req, res) => {
  res.json({
    data: "Server is working..."
  });
})


export default app;