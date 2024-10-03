const Joi = require('@hapi/joi');
//essquema de validacion de la carta de personaje
const personajeSchema = Joi.object({
    nombre: Joi.string().min(3).required(),
    rareza : Joi.string().min(1).required(),
    imagen: Joi.string(),
    color: Joi.array().items(Joi.string()).required(),
    ser: Joi.array().items(Joi.string()).required(),
    habilidadPasiva:Joi.object().pattern(Joi.string(), Joi.string()).required(),
    habilidadArcana: Joi.object().pattern(Joi.string(), Joi.string()).required(),
    piedrasNecesarias: Joi.array().items(Joi.object().pattern(Joi.string(), Joi.number())).required(),
    codigo: Joi.string().required()
});
//validamos los datos correspondientes de la conlsulta por medio de la url 
const validacionSchemaPersonaje = (req, res, next) => {
    const { error } = personajeSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
//esquema de validacion de la carta del famiiliar
const familiarSchema = Joi.object({
  nombre : Joi.string().min(3).required(),
  rareza : Joi.string().min(1).required(),
  imagen : Joi.string(),
  color: Joi.array().items(Joi.string()).required(),
  ser : Joi.array().items(Joi.string()).required(),
  habilidadPasiva: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  habilidadArcana: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  piedrasNecesarias: Joi.array().items(Joi.object().pattern(Joi.string(), Joi.number())).required(),
  codigo: Joi.string().required()
})
/*validamos los datos correspondientes de la consulta por medio de la url 
se envia los valores para validar si cumple para poder ser insertado a la bases de datos
*/
const validacionSchemaFamiliar = (req, res, next) => {
  const { error } = familiarSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};


//esquema de validacion de la carta del arma

const armaSchema = Joi.object({
  nombre : Joi.string().min(3).required(),
  rareza : Joi.string().min(1).required(),
  imagen : Joi.string(),
  color: Joi.array().items(Joi.string()).required(),
  ataque : Joi.number().required(),
  durabilidad: Joi.number().required(),
  habilidadPasiva: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  habilidadArcana: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  efecto: Joi.array().items(Joi.string()).required(),
  tipoArma : Joi.array().items(Joi.string()).required(),
  piedrasNecesarias: Joi.array().items(Joi.object().pattern(Joi.string(), Joi.number())).required(),
  codigo: Joi.string().required()
})
//validamos los datos correspondientes de la conlsulta por medio de la url 
const validacionSchemaArma = (req, res, next) => {
  const { error } = armaSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

//esquema de validacion de la carta del habilidad


const habiliadadSchema = Joi.object({
  nombre : Joi.string().min(3).required(),
  rareza : Joi.string().min(1).required(),
  imagen : Joi.string(),
  color: Joi.array().items(Joi.string()).required(),
  piedrasNecesarias: Joi.array().items(Joi.object().pattern(Joi.string(), Joi.number())).required(),
  habilidadPasiva: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  habilidadArcana: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  tiempoCasteo: Joi.array().items(Joi.string()).required(),
  codigo: Joi.string().required()
})
//validamos los datos correspondientes de la conlsulta por medio de la url 
const validacionSchemaHabiliadad = (req, res, next) => {
  const { error } = habiliadadSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

//esquema de validacion de la carta del piedra



//esquema de validacion de la carta del historia


//esxportamos todas las validaciones 
  module.exports = {validacionSchemaPersonaje,validacionSchemaFamiliar,validacionSchemaArma,validacionSchemaHabiliadad};