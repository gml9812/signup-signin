//const express = require('express')
import express from 'express'

//const pageController = require('../controllers/page')
import { home,signIn,signUp,welcome } from '../controllers/page'

const router = express.Router();

router.get('/',home) 
router.get('/signIn',signIn)
router.get('/signUp',signUp)
router.get('/welcome',welcome)

//temp@@@@@@@@@@@@@@@@@@@@@@@@@@@
import { index } from '../controllers/page'
router.get('/index',index)

//module.exports = router
export { router as pageRouter }