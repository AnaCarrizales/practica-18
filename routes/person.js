let express = require('express'); //inyección de la dependencia
let router = express.Router();
//instalación del router

router.get('/person',(req,res)=>{
    res.send('has solicitado el listado de personas');
})

module.exports=router;