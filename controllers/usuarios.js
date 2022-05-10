// paquete para encriptar password
// npm i bcryptjs
// para validar correo
// npm i express-validator

const { request } = require('express');
const {response} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');



const usuariosGet = (req = request, res = response) => {

    const {q, nombre = "no name", apikey, page = 1, limit} = req.query;


    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = async (req, res = response) => {


    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario( {nombre, correo, password, rol} );


    //ENCRIPTAR LA PASS
    //buscar info sobre encriptado de password
    //numero de vueltas para desencriptar entre mayor vueltas mayor seguridad pero mayor es la carga
    const salt = bcryptjs.genSaltSync()
    //para encriptarlo en una sola via
    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en la db
    await usuario.save();

    res.json({
        msg: 'post API - controlador',
        usuario
    });
}


const usuariosPut = async(req, res = response) => {

    const {id} = req.params;
    const {_id, password, google, correo, ...resto } = req.body;


    //TODO validar contra base de datos
    if(password){
        //encriptar password
        const salt = bcryptjs.genSaltSync()
        resto.password = bcryptjs.hashSync(password, salt);
    }   

        const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json({
        msg: 'put API - controlador',
        usuario
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}