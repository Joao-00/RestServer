const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen } = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares');



const router = Router();


router.post( '/', cargarArchivo);

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('id','El id debe de ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ),
    validarCampos
 ], actualizarImagen )


module.exports = router;