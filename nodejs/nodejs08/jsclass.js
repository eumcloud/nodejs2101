const fs = require("fs").promise;


class rstf extends fs{
    constructor(method, url, data, form, elsif1, elsif2, elsif3){
        this.method = method;
        this.data = data;
        this.form = form;
        this.url = url;
        this.elsif1 = elsif1;
        this.elsif2 = elsif2;
        this.elsif3 = elsif3;
        
        import filesystem as fs;
        let CntType = `{"Content-Type": "text/html; charset=utf-8"}`;
        const users = {};
    }
    serv(){
        
           try{
               if(req.method === this.method){
                   if(req.url === this.url){
                       const data = await fs.readFile(this.data);
                       res.writeHead(200, CntType);
                       return res.end(data);
                   }else if (req.url === "/about"){
                       const data = await fs.readFile(this.elsif1);
                       res.writeHead(200, CntType);
                       return res.end(data);
                   }else if(req.url === "/users"){
                       const data = await fs.readFile(this.elsif2);
                       res.writeHead(200, CntType);
                       return res.end(JSON.stringify(users));
                   }
               }
               try{
                   const data = await fs.readFile(`.${req.url}`);
                   return res.end(data);
               }catch(err){ 
               }
           }else if (req.method === "POST"){
                   if(req.url === "/users"){
                       
                   
               }
               
           }catch(err){
               
           } 
        });
    }
}