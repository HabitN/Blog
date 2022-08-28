import { body } from "express-validator"

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
]

export const registraterValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('fullName','Укажи имя не короче 3 символов').isLength({min: 3}),
    body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),
]

export const postCreateValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('fullName','Укажи имя не короче 3 символов').isLength({min: 3}),
    body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),
]