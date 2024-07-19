npm init -y
npm install express

"type":"module",


//write code to parse request body

//app.use(express.json());
//app.use(express.urlencoded({extended:false}));
//app.use(logger);

app.use(errors); //add after routes

even though we use req,res,next, error, in middleware we do not import those in middleware
if you face no module "throw err", remove pacakage-lok json and node-module folder and run nom install

