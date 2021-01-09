const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')
var items = [];
var workItems = [];
var pageCheck;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req,res){
   pageCheck = "notWork"; 
   let day = date.getDate();
   res.render('list', {listTitle: day, newListItems: items, pageCheck: pageCheck});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    if (req.body.route === "Work"){
        pageCheck = "Work";
        if (item){
            workItems.push(item);
            res.redirect("/work");
        }
        else{
            res.status(400);
            res.render('fail')
        }
    }
    else{
        pageCheck = "notWork";
        if (item){
            items.push(item);
            res.redirect("/");
        }
        else {
            res.status(400);
            res.render('fail');
        }
    }    
});

app.post("/failure", function(req, res){
    if (pageCheck === "Work"){
        pageCheck = "";
        res.redirect("/Work");
    }
    else if(pageCheck === "notWork"){
        pageCheck = "";
        res.redirect("/");
    }
    
});

app.get("/work", function(req, res){
    pageCheck = "Work";
    res.render('list', {listTitle: "Work List", newListItems: workItems, pageCheck: pageCheck});
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server listening on port 3000');
});