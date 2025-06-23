import { createClient } from '@supabase/supabase-js';
import supabase from '../services/supabaseClient.js';

const verificarToken = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'No hay token, acceso denegado' });
    }

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }

    req.user = data.user;
    req.token = token;
    next();
};

export default verificarToken;
