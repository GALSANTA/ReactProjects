const mongoose = require('mongoose');
const env = require('../.env');

mongoose.connect(`mongodb+srv://${env.DBUSER}:${env.DBPASSWORD}@cluster0.n9awb.mongodb.net/sistema?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

module.exports = mongoose;