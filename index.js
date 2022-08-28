import express from 'express'
import mongoose from 'mongoose'
import {registraterValidation, loginValidation, postCreateValidation} from './validations.js'
import checkAuth from './utils/checkAuth.js'
import {register, login, getMe} from './controllers/userController.js'


mongoose
    .connect('mongodb+srv://admin:Sonia24@cluster0.amc1uot.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('Db error', err))

const app = express()
app.use(express.json())

app.post('/auth/login',loginValidation, login)

app.post('/auth/register', registraterValidation, register)

app.get('/auth/me', checkAuth, getMe )

app.listen(4444, (err) => {
    if(err) { 
        return console.log(err);
    }

    console.log('Serwer OK');
})