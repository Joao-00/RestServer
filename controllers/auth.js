const bcryptjs = require("bcryptjs");
const { response } = require("express");
const Usuario = require('../models/usuario');


const login = (req, res = response) => {

    const {correo, password} = req.body;

    try {

        //TODO: verificar si el email existe
        const usuario = await Usuario.findOne({correo});
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - correo'
            });
        }

        //TODO: si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - estado: false'
            });
        }

        //TODO: verificar la password
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - password'
            });
        }

        //TODO: generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}


module.exports = {
    login
}