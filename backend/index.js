
import { createClient } from '@supabase/supabase-js'
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).json({message: 'El servidor funciona!!!'})
})

