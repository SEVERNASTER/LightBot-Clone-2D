
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

        // para validar email duplicado
        const { data: existeData, error: existeError } = await supabaseAdmin.auth.admin.listUsers({
            page: 1,
            perPage: 1000,
        });

        if (existeError) throw existeError;

        const existe = existeData.users.find(user => user.email === email);

        if (existe) {
            return res.status(400).json({ 
                message: 'El email ya está registrado',
                tipoError: 'email repetido'
            });
        }

        // para validar el nombre de usuario duplicado

        const { data: usuarioExistente, error } = await supabaseAdmin
            .from('Usuario')
            .select('id')
            .eq('username', username)
            .maybeSingle();

        if (usuarioExistente) {
            return res.status(400).json({ 
                message: 'El nombre de usuario ya está en uso' ,
                tipoError: 'username repetido'
            });
        }


        const { data: dataSign, error: errorSign } = await supabase.auth.signUp({
            email,
            password,
        })


        if (errorSign) {
            if(errorSign.message.includes('Unable to validate email address: invalid format')){
                return res.status(400).json({
                    message: 'Formato de correo electrónico invalido',
                    tipoError: 'email invalido'
                })
            }

            if (errorSign.message.includes('Password should be at least 6 characters.')) {
                    return res.status(400).json({
                        message: 'Mínimo 6 caracteres en la contraseña',
                        type: 'supabase error'
                    });
                }
            throw errorSign;
        }

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

