import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import expressValidator from 'express-validator';
import cors from 'cors';
import productRoutes from './routes/product';
import categoryRoutes from './routes/category';
import authRoutes from './routes/auth';

//cấu hình 
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(expressValidator());
app.use(cors());


//connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true 
}).then(() =>{
    console.log(`Database connected`);
});
mongoose.connection.on('Error', err => {
    console.log(`Database connect failed , ${err.message}`);
});
// Routes Middleware 
app.use('/api',productRoutes);
app.use('/api',categoryRoutes);
app.use('/api',authRoutes);
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server is runing on port : ${port}`);
})