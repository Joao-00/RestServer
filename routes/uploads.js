const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen } = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares');
const { validarArchivoSubir } = require('../middlewares/validar-archivo');



const router = Router();


router.post( '/', validarArchivoSubir, cargarArchivo);

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('id','El id debe de ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ),
    validarCampos
 ], actualizarImagen )


module.exports = router;