
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SERVICE_ROLE
const supabaseAdmin = createClient(supabaseUrl, supabaseKey)

export default supabaseAdmin