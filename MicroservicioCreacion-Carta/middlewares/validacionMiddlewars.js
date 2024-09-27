const Joi = require('@hapi/joi');
//essquema de validacion de la carta de personaje
const personajeSchema = Joi.object({
    nombre: Joi.string().min(3).required(),
    imagen: Joi.string(),
    color: Joi.string().required(),
    ser: Joi.string().required(),
    habilidadPasiva: Joi.string().required(),
    habilidadArcana: Joi.string(),
    piedrasNecesarias: Joi.object().pattern(Joi.string(), Joi.number()).required(),
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


//esquema de validacion de la carta del arma

const armaSchema = Joi.object({
  nombre : Joi.string().min(3).required(),
  imagen : Joi.string(),
  color: Joi.string().required(),
  ataque : Joi.number().required(),
  durabilidad: Joi.number().required(),
  habilidadPasiva: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  habilidadArcana: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  efecto: Joi.array().items(Joi.string()).required(),
  tipoArma : Joi.string().required(),
  piedrasNecesarias: Joi.object().pattern(Joi.string(), Joi.number()).required(),
  codigo: Joi.string().required()
})
const validacionSchemaArma = (req, res, next) => {
  const { error } = armaSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

//esquema de validacion de la carta del habilidad


//esquema de validacion de la carta del piedra


//esquema de validacion de la carta del historia
  module.exports = {validacionSchemaPersonaje,validacionSchemaArma};