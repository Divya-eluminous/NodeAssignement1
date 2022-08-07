var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//app.use(bodyParser.json()); 

// for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: true })); 
const urlencoded = bodyParser.urlencoded({ extended: true });
const products = require('./product.json');

//To get all products

app.get('/',(req,res)=>{
   return res.send(products);
});

//To get single product by id
app.post('/getProductById',urlencoded,(req,res)=>{
    const productId = req.body.id;
    console.log(productId);
    const findProduct = products.find((product)=>
      product.id===Number(productId)
    )
    if(!findProduct)
    {
       return res.send('Product Not Available');
    }
    return res.json(findProduct);
 });

 //To search product by name
app.post('/searchProduct',urlencoded,(req,res)=>{
   const productName = req.body.name;
   console.log(productName);
   const searchProduct = products.find((product)=>
     product.name===productName 
   )
   if(!searchProduct)
   {
      return res.send('Product Not Available');
   }
   return res.json(searchProduct);
});


app.listen(5000,()=>{
 console.log('server is running at port 5000');
});