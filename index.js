import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
app.use(cors({
    credentials: true,
    origin : process.env.FRONTEND_URL
}));
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false,
}))

const PORT = 8080