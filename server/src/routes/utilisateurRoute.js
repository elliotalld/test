const express = require('express');
const router = express.Router();

const Utilisateur = require('../model/utilisateurs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret'

const UtilisateurController = require('../controllers/UtilisateurController');

router.get('/list' ,UtilisateurController.list);
router.post('/create' ,UtilisateurController.create);
router.get('/get/:id',UtilisateurController.get);
router.post('/update/:id',UtilisateurController.update);
router.get('/delete' ,UtilisateurController.delete);

router.post('/login',UtilisateurController.login) ;
  


module.exports = router;