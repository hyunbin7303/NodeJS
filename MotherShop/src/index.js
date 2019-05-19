console.log('Kevin Portfolio Service');


let express = require('express');
let app = express();
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use((req,res,next)=> {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

// Handling for Resource Not Found - 404
app.use((req,res,next)=>{
  res.status(404).send('404 Error ! Please check your URL.');
})

// Handing for Error 500
app.use((err, req,res,next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, '..public/500.html'));
})


app.get('/', (req,res)=>res.send('hello world with Express'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
