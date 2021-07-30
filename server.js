const express = require('express')

const app = express()
app.listen(3000)

let time = new Date().getHours();
let day =new Date().getDay();
app.use(express.static('views'));

const checkMiddleware = (req, res, next) => {

    if ((time>8)&&(time<18) && (day>0) && (day<6)) {
      next();
    } else {
        res.sendFile(__dirname + '/views/Error.html');
    }
  };
app.use(checkMiddleware);

app.get('/',checkMiddleware, function(req, res) {
  
  res.sendFile(__dirname + '/views/index.html');
 
})


app.get('/home',checkMiddleware, (req, res) => {
    
    res.sendFile(__dirname + '/views/index.html');
  
})

app.get('/contact',checkMiddleware, (req, res) => {
   
    res.sendFile(__dirname + '/views/Contact.html');
  
})

app.get('/services',checkMiddleware, (req, res) => {

   
    res.sendFile(__dirname + '/views/Service.html');
 
})

app.listen(5000, (err) => {
    if(err) console.log("server is not running")
    else console.log("server is runnig on port 3000")
})