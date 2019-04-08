const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/',function(req,res){

})

app.get('/ask',function(req,res){
    res.sendFile(__dirname + "/view/ask.html");
})

app.post('/addquestion',function(req,res){
//   req.on("data",function(data){  // lay data
//       console.log(data + "").split("=");
//   })
    const questionList = JSON.parse(
     fs.readFileSync("./question.json", {encoding: "utf-8"}));
    const { question } = req.body;
    const newQuestion = {
        content: question,
        yes:0,
        no:0,
        id:questionList.length,
    }
    questionList.push(newQuestion);
    fs.writeFileSync("./question.json", JSON.stringify(questionList));
    res.send("success");
});

app.get("/question/:question_number",function (req,res) {
    const {question_number} = req.params
    const questions = JSON.parse(fs.readFileSync("questions.json", {encoding:"utf-8"}))
    if (question_number >= questions.length) {
        res.send("Wrong question");
    } else {
        const question = questions[question_number];
        const question_text= question.question;
        const yes_number = question.yes;
        const no_number = question.no;
        res.send(`
        <h1>${question_text}</h1>
        <span>${yes_number}</span>
        <span>${no_number}</span>
        <a href="/"><button>Xem cau hoi khac</button></a>
        `);
    }
})




app.listen(6969, function(err){
    if(err) console.log(err)
    else console.log("Server start success");
})