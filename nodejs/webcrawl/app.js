const express = require("express");
const app = express();
// const router = require("./router");

app.set("view engine", "pug");
app.set("views", "./views");

const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

const getProducts = ()=>{
    console.log("Starts-------");  
    
    request({
       url: "https://search.shopping.naver.com/search/category?catId=50002017",
       method: "GET" 
    },(err, res, body)=>{
        if(err) return console.error(err);
        if(res.statusCode ===200){
            console.log("response ok");
            
            // const bodyDecoded = iconv.decode(body, "utf-8");
            // console.log(body);
            
            const $ = cheerio.load(body);
            const dataChose = $(".basicList_link__1MaTN title").toArray();
            const result = [];
            dataChose.forEach((div)=>{

            });
            
            console.log(dataChose);
    }  
    }
  );
    
};

getProducts();

app.get("/", (req, res)=>{
   res.send("GET OK"); 
});

const port = 3000;
app.listen(port, ()=>{
   console.log(`Application is Running --------${port}`) ;
});