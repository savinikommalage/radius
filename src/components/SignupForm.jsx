import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Supabase client is created per call to keep example simple.
// In production, create a single client in src/services/supabase.js and import it.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export default function SignupForm(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    try{
      // create client (no auth required for simple inserts if DB RLS allows)
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { error } = await supabase.from('submissions').insert([{ ...form }])
      if(error) throw error
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
    }catch(err){
      console.error(err)
      setSuccess(false)
    }finally{ setLoading(false) }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="p-3 border rounded" />
        <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-3 border rounded" />
      </div>
      <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" className="w-full p-3 border rounded mt-4" />
      <div className="mt-4">
        <button className="bg-purple-700 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
        {success === true && <span className="ml-3 text-green-600">Thanks — received.</span>}
        {success === false && <span className="ml-3 text-red-600">Submission failed.</span>}
      </div>
      <p className="text-xs text-gray-500 mt-2">No sign-in required. Provide Supabase anon key in `.env` for submissions. See README.</p>
    </form>
  )
}
