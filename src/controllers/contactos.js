// CREATE, READ, UPDATE , DELETE
const modelo = require('./../models/contacto');
const ContactosController = {
   // update:     (req,res)=>{},
    list:       (req,res)=>{
        modelo.find({status: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },
    create:     (req,res)=>{
        const datos = req.body;
        modelo.create(datos).then(respuesta =>{
            console.log('se inserto el contacto correctamente');
            res.send(respuesta);
        }).catch(err =>{
            res.status(400).send('no se pudo guardar el contacto');
        })
   },
    getItemOld:        (req,res)=>{
        const id = req.params.id;
        modelo.find0ne({_id: id}).then(respuesta=>{
            modelo.findOne({_id: id, status: 1}).then(respuesta=>{
                if(respuesta){
                    res.send(respuesta);
                }else{
                    res.status(404).send('no se encontro');
                }
            })
        }).catch(err =>{
            res.status(404).send('no se encontro');
        });
    },
    getItem:      async (req,res)=>{
        const id = req.params.id;
        try{
            const contacto = await modelo.findOne({_id: id, status:1});
       
            if(contacto){
                res.send(contacto);
            }else{
                res.status(404).send('no se encontro el contacto');
            }
        }catch
            {
                res.status(400).send('el id no es valido');
            }
    },
    update: (req,res)=>{
        const id = req.params.id;
        const telefono= req.body.telefono;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.telefono=telefono;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    deleteOne:     (req,res)=>{
        const id = req.params.id;
        const status = 2;
        modelo.findOne({_id: id}).then(respuesta=>{
            respuesta.status =2;
            respuesta.save();
            res.send();
        }).catch(err =>{
            res.status(400).send('no se pudo eliminar');
        })
    }
}

module.exports = ContactosController;