
// pre-defined modules
const express = require('express');
const ejs = require('ejs');
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const mongosession = require('connect-mongodb-session')(session);
const methodOverride = require('method-override');
const pathh = require('path');





// user-defined imports
const connect = require('./db/dbconnection')
const login = require('./routers/login')
const homepage = require('./routers/homepage')
const uploadfashion = require('./routers/uploadfashion');
const getfashion = require('./routers/getfashion');
const gethelpfashion = require('./routers/gethelpfashion');
const contact = require('./routers/contact');
const uploadit = require('./routers/uploadit')
const getit = require('./routers/getit')
const userdashboard = require('./routers/userdashboard')
const updateproduct =  require('./routers/updateproduct')
const deleteproduct = require('./routers/deleteproduct')
const profile = require('./routers/profile')
const decompose = require('./routers/decomposefood')
const selectai = require('./routers/selectai')
const getaioutfit = require('./routers/getaioutfit')

//dotenv config
dotenv.config()




//dotenv variables
const path = process.env.PORT  
const dburl = process.env.DBPATH



const app = express()



//dbconnect
connect(dburl);


//template engine set up
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(cookieparser())

//static files declaratipn
app.use(express.static('public'))
app.use('/uploads', express.static(pathh.join(__dirname, 'uploads')))
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));






//login cookie based authuntication implementation
const store = new mongosession(
    {
        uri: dburl,
        collection: "mysession"
    }
)
app.use(session({
    key: "thisiskey",
    secret: "THISISSECRET",
    saveUninitialized: false,
    resave: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24
    },
    store: store
}))
const isAuth = (req, res, next) => {
  if (req.session && req.session.isAuth) {
    next()
  } else {
    if (req.url !== '/login') {
      res.redirect('/login');
    } else {
      next();
    }
  }
};

app.get('/', (req, res) => {
  res.redirect('/login');
});


app.use("/",login)
app.use("/homepage",isAuth,homepage)
app.use("/uploadfashion",isAuth,uploadfashion)
app.use("/getfashion",isAuth,getfashion)
app.use("/gethelpfashion",isAuth,gethelpfashion)
app.use("/contact",isAuth,contact)
app.use('/uploadit',isAuth,uploadit)
app.use('/getit',isAuth,getit)
app.use('/userdashboard',isAuth,userdashboard)
app.use('/updateproduct',isAuth,updateproduct)
app.use('/deleteproduct',isAuth,deleteproduct)
app.use('/profile',profile)
app.use('/decomposefood',decompose)
app.use('/selectai',selectai)
app.use('/getaioutfit',getaioutfit)



app.listen(path,(err)=>{
    console.log("server listening at",path)
})


module.exports = { isAuth }