const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/E-Commerce'
main().catch(err => console.log(err));

async function main() {
  mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
mongoose.connection.once('open',_ =>{ //el evento once se ejecuta una sola vez, cuando se conecta la base de datos
    console.log('%s Database is connected')
});