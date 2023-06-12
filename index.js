
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const dburl = process.env.DB_URL;
const port = process.env.PORT;
   
mongoose.connect(dburl , {useNewUrlParser: true   });

const connect = mongoose.connection;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

try {
    connect.on('open' , () => {
        console.log('mongoDb is connected')
    })
}catch(err){
    console.log(ReferenceError ,err)
}

const totaldatas = require('./router/routers');
app.use('/' ,totaldatas);

app.use('/mentors',totaldatas)
app.use('/student',totaldatas)



// Start the server
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});



