import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

const express = require('express')
const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT | 8080

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))