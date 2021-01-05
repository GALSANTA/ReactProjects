const mongoose = require('mongoose');

mongoose.connection.on("connected", () => {
    console.log("Conectado com o banco de dados!");;
});

mongoose.connection.on("error", (err) => {
    console.error("\x1b[31m", "Erro na conexão com o banco de dados: " + err);
});

mongoose.connect(`mongodb+srv://GALSANTA:GHL9wVqk6AKADiPT@cluster0.n9awb.mongodb.net/sistema?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;