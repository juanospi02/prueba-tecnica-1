import { Router } from 'express';
// importamos los controller
import { registerUser,getUsers,loginUser } from '../controllers/user.controllers.js';

const router = Router();

// Rutas
// Registro de usuarios

router.post('/register', registerUser); 

// Inicio de sesión

router.post('/login', loginUser);   
    
 // Obtener usuarios
router.get('/', getUsers);            

export default router;
