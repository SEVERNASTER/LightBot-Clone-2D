
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import supabase from './services/supabaseClient.js';
import supabaseAdmin from './services/supabaseAdmin.js';
import bcrypt from 'bcrypt';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'El servidor funciona!!!' })
})

const generarAlias = (nombre, apellido) => {
    const inicialNombre = nombre?.trim()?.[0]?.toUpperCase() || '';
    const inicialApellido = apellido?.trim()?.[0]?.toUpperCase() || '';
    return inicialNombre + inicialApellido;
}

app.post('/api/registrar', async (req, res) => {
    const { email, password, username, nombre, apellido } = req.body

    if (!email || !password || !username || !nombre || !apellido) {
        return res.status(400).json({ message: 'Faltan campo obligatorios' })
    }

    try {

        const { data: dataSign, error: errorSign } = await supabase.auth.signUp({
            email,
            password,
        })


        if (errorSign) throw error;

        const { data: dataUser, error: errorUser } = await supabaseAdmin
            .from('Usuario')
            .insert([{
                id: dataSign.user.id,
                email,
                username,
                nombre,
                apellido,
                alias: generarAlias(nombre, apellido)
            }])
            .select()

        if (errorUser) throw errorUser;


        res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: dataUser
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
})

