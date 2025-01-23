import express from 'express'; 
import dotenv from 'dotenv'; 
import { connectionMongo } from './src/config/dataBase.js';
import userRoutes from './src/routes/user.routes.js'
import cors from 'cors'; 
const app = express();
dotenv.config();
connectionMongo();

const port = process.env.PORT || 9000; 
console.log("PORT", port);
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
// 3. ejecutar el servidor 

app.listen(port, ()=>{
    console.log('El servidor está ejecutándose correctamente, en el puerto ', port);
});