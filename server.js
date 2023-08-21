const express = require('express');
const app = express();
const port = 3001;

app.get('/data' ,(req,res) =>{
    res.send('helo this is learning class')

})

app.listen(port, (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(`http://localhost:${port}`)
    }
}
)