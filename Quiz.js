const startButton= document.getElementById('start-button');
let template = document.getElementById('handlebars').innerHTML;
let templateScript = Handlebars.compile(template);
//Holds questions to use with handlebars
const context = {
    qArray: [{
        question : "You're planning a vacation. Go somewhere familiar you love, or try something new?", 
        answers : [{text:'(a) Familiar',id: 'a'},{text: '(b) New',id:'b'}],
        display : false
    },
    {
        question : "You've been sentenced to death for your actions. How does this make you feel?", 
        answers : [{text:"(a) Afraid. I don't know what will happen.",id:'a'},{text:"(b) Angry. No one has that right.",id:'b'},{text:"(c) Calm. It was worth it.",id:'c'}],
        display : false
    },
    {
        question : "A runaway train is bearing down on five people who are tied to the track. You can cause the train to switch tracks, but there is one person tied to the second track.", 
        answers : [{text:"(a) Switch tracks.",id: 'a'},{text:"(b) Do nothing.",id:'b'}],
        display : false
    },
    {
        question : "A runaway train is bearing down on five people. You're standing on the platform next to an enormously fat man. Pushing him into the track would stop the train.", 
        answers : [{text:"(a) Push the fat man.",id:'a'},{text:"(b) Do nothing.",id:'b'}],
        display : false
    },
    {
        question : "A runaway train is bearing down on five people tied to the track. You could stop the train by jumping onto the track, but you would die.", 
        answers : [{text:"(a) Jump on the tracks.",id:'a'},{text:"(b) Push the fat man.",id:'b'},{text:"(c) Do nothing.",id:'c'}],
        display : false
    }]
    
};
const questions= document.getElementById('questions');
function refreshHandlebars() {
    let html = templateScript(context);
    questions.innerHTML=html;
}
refreshHandlebars();
startButton.onclick = () => {
    context.qArray[0].display=true;
    refreshHandlebars();
    startButton.style.display="none";
    questions.style.width='100%';
    questions.style.display='inline';
    console.log(questions.style.display);
    runQuestions();
}

function nextQuestion() {
    for(let x=0;x<context.qArray.length-1;x++){
        if(context.qArray[x].display){
            context.qArray[x].display=false;
            context.qArray[x+1].display=true;
            console.log((x+1)+' true' );
            setTimeout(refreshHandlebars(),1000);
            runQuestions();
            break;
        }
    }
}
function runQuestions(){
    const ac = document.getElementsByClassName('answerChoice');
    for(let x=0;x<ac.length;x++){
        ac.item(x).onclick = () => {
            nextQuestion();
            console.log('here '+x);
        }
    }
}

