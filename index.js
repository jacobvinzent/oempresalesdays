var express = require('express')
var app = express()
var fs = require('fs')
 

app.use(express.static('public'))

/*
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  */

  


 
  
 app.get('/addonetofile', function (req, res) {
    fs.stat('count.txt', function(err, stat) {
        if(err == null) {
            console.log('File exists');
            
            fs.readFile('count.txt', (err, data) => {
                if (err) throw err;
                console.log(data.toString());
                var newval = parseInt(data.toString())+1
                fs.writeFile('count.txt', newval.toString());
                res.send(newval.toString())
              });
        } else if(err.code == 'ENOENT') {
            // file does not exist
            fs.writeFile('count.txt', '1');
            res.send('1')
        } else {
            console.log('Some other error: ', err.code);
        }
    });
  })
 
 
app.listen(3000)