// Supabase client wrapper
// Copy .env.example -> .env and fill the values
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

// Export a single client to reuse across the app
export const supabase = createClient(url, key)

// Usage example (in components):
// import { supabase } from '../services/supabase'
// await supabase.from('submissions').insert([{ name, email, message }])
