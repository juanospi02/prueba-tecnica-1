import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.model.js'; 

// Controlador para registrar un usuario
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validación 
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
    }
};

// Controlador para iniciar sesión
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validación simple
        if (!email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Buscar al usuario por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Generar un token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }
};

// Controlador para obtener usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password'); 
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
    }
};
