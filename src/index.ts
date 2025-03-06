import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { serverport } from './config/environment.config';
// import approuter from './routes/app.routes';
import { db } from './database/database.connection';
import userRoute from './routes/user.routes';

const app = express();
app.use((req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`${req.method} ${req.baseUrl}${req.url} took ${duration}ms ${res.statusCode}`);
    });
    next();
});

const CORESOPTIONS = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    transports: ["websocket"],
};

app.use(cors(CORESOPTIONS));
app.use(bodyParser.json());
app.use('/api/user', userRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', async (req: Request, res: Response) => {
    res.status(200).json('Hello World Sixtus');
});
db.sequelize.sync({ force: !true }).then(() => {
    const server = app.listen(serverport, async () => {
        console.log(`Server is running at http://localhost:${serverport}`);
    });
});

export default app;