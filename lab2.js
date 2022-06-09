/**
 *  Create a node application called lab2
- Initialize npm and create package.json via the wizard
- Install the connect module with npm and save it to package.json
- Create server.js
- Link to the connect and url packages
- Write a calculate function that parses the url for 3 parameters: method, x, and y
- Possible values for the method parameter are: "add", "subtract", "multiply", and "divide"
- If the method value is anything else, show an error message
- Determine which math operation to run based on the value of the method parameter
- Perform this math operation on the other 2 values (x and y)
- Display the full math operation and its result on the page in this format: x [method] y = [result]
 */




const http = require('http');
const url = require('url');

//create a server
http.createServer((req, res) =>{

    let mathString  =   url.parse(req.url,true).query;
    let math        =   mathString.math;
    let x           =   mathString.x;
    let y           =   mathString.y;


    //condition for the math operations

    if(math ==='add'){
        let z = Number(x) + Number(y);
        res.write(x+ ' + ' + y + '='+  z);

    }else if(math ==='subtract'){
        let z = Number(x) - Number(y);
        res.write(x+ ' - ' + y + '='+  z);

    }
    else if(math ==='multiply'){
        let z = Number(x) * Number(y);
        res.write(x+ ' * ' + y + '='+ z);

    }
    else if(math ==='divide'){
        let z = Number(x) / Number(y);
        res.write(x+ ' / ' + y + '='+ z);

    }
    else{
        res.write("write valid type of function of math!!! error");
    }
    
    res.end();
        
    }
).listen(3017);
console.log('App is ruuning on http://localhost:3017/?math=add&x=10&y=15');