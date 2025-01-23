import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

export const connectionMongo = () => {
    const dbURL = process.env.DB_URL;
    
    if (!dbURL) {
        throw new Error('La URL de conexión a MongoDB no está definida en .env');
    }

    mongoose.connect(dbURL)
        .then(() => {
            console.log('Conexión exitosa a la base de datos MongoDB');
        })
        .catch((error) => {
            console.error('Error de conexión a MongoDB:', error);
        });
};
