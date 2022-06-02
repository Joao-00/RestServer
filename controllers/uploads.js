const path = require('path');
const fs   = require('fs');

const { response } = require('express');

const { Usuario, Producto } = require('../models');
const { subirArchivo } = require('../helpers/subir-archivo');


const cargarArchivo = async(req, res = response) => {


    try {
        
        // txt, md
        // const nombre = await subirArchivo( req.files, ['txt','md'], 'textos' );
        const nombre = await subirArchivo( req.files, undefined, 'imgs' );
        res.json({ nombre });

    } catch (msg) {
        res.status(400).json({ msg });
    }

}

const actualizarImagen = async (req, res = response) => {

    const { id, coleccion } = req.params;

    


} 


module.exports = {
    cargarArchivo,
    actualizarImagen,

}