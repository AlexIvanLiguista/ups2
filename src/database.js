const mongoose=require('mongoose');
const URI='mongodb://127.0.0.1/usuarios_db';
mongoose.connect(URI)
.then(db=>console.log('BD conetada'))
.catch(err => console.error(err));
module.exports=mongoose;