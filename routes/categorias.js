const { Router } = require('express');
const { check } = require('express-validator');
const { crearCategoria } = require('../controllers/categorias');

const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');


const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/',  );

// Obtener una categoria por id - publico
router.get('/', );

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [ 
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria );

// Actualizar - privado - cualquiera con token válido
router.get('/', );

// Borrar una categoria - Admin
router.get('/', );



module.exports = router;