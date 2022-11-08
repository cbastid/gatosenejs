let express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var cats_array = [
  {name: "tiger", imagen: "/img/tiger.jpg", favorite: "Carne", age: "10", places: "on the grass"}, 
  {name: "cat-1", imagen: "/img/cat-1.jpg", favorite: "Milk", age: "3", places: "under the bed"}, 
  {name: "cat-2", imagen: "/img/cat-2.jpg", favorite: "mouse", age: "5", places: "in the roof"} 
];

app.get("/cats", function (request, response){

    response.render('cats', {gatos: cats_array});
  })
app.get("/detalles/:id", function (request, response){
let datos = cats_array[request.params.id];
  
  console.log("datos array :" + datos);
  response.render('detalle', {gatos: datos});
  
})
  
  app.listen(8000, function() {
    console.log("listening on port 8000");
  })