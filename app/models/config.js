const Config = {
    "title"         :   "Inquirem!",
    "slogan"        :   "Pregunta y Responde",
    "description"   :   "Pregunta y responde. ¡Encuentra a personas que quieren saber más de ti!",
    "keywords"      :   "ask, preguntas, personal, facebook, twitter, tumblr, instagram, hipster, gamner, geek",
    "email"         :   "webmaster@inquirem.net",
    "offline"       :   {
        "status"    :   0,
        "message"   :   "Hola, estamos realizando unas mejoras al sistema.<br />Por esta razón el sitio estará en mantenimiento por unos días.<br />Te sugerimos volver en unas horas."
    },
    "staticFilesUrl"   :   "https://imalaga.ml"
};

(process.env.NODE_ENV == 'production') && (Config.staticFilesUrl = process.env.STATIC_FILES_URL);

module.exports = Config;