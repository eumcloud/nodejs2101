// 실제 개발환경을 위해 app.js 파일명 사용
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // npm에서 body-parser 모듈 다운로드 했음

const host = "127.0.0.1";
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({extended: false}); // extended: false => 내부 url encode parser를 안쓴다. true는 반대

app.use(express.static("public"));

app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + '/' + "index.html");
});

app.get("/process_get", (req, res) => {
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post("/process_post", urlencodedParser, (req, res) => {
    var response = {
        first_name: req.body.first_name, // npm에서 body-parser 모듈 설치했으므로 body로 받음
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(port, host, () => {
    console.log(`Application Server running at http://${host}:${port}/`);
});