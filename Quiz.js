const startButton= document.getElementById('start-button');
let template = document.getElementById('handlebars').innerHTML;
let templateScript = Handlebars.compile(template);
//Holds questions to use with handlebars
const context = {
    q1: {
        question : "You're planning a vacation. Go somewhere familiar you love, or try something new?", 
        answers : [{text:'(a) Familiar',id: 'a'},{text: '(b) New',id:'b'}],
        display : false
    },
    q2: {
        question : "You've been sentenced to death for your actions. How does this make you feel?", 
        answers : [{text:"(a) Afraid. I don't know what will happen.",id:'a'},{text:"(b) Angry. No one has that right.",id:'b'},{text:"(c) Calm. It was worth it.",id:'c'}],
        display : false
    },
    q3: {
        question : "A runaway train is bearing down on five people who are tied to the track. You can cause the train to switch tracks, but there is one person tied to the second track.", 
        answers : [{text:"(a) Switch tracks.",id: 'a'},{text:"(b) Do nothing.",id:'b'}],
        display : false
    },
    q4: {
        question : "A runaway train is bearing down on five people. You're standing on the platform next to an enormously fat man. Pushing him into the track would stop the train.", 
        answers : [{text:"(a) Push the fat man.",id:'a'},{text:"(b) Do nothing.",id:'b'}],
        display : false
    },
    q5: {
        question : "A runaway train is bearing down on five people tied to the track. You could stop the train by jumping onto the track, but you would die.", 
        answers : [{text:"(a) Jump on the tracks.",id:'a'},{text:"(b) Push the fat man.",id:'b'},{text:"(c) Do nothing.",id:'c'}],
        display : false
    }
    
};
let html = templateScript(context);
const questions= document.getElementById('questions');
questions.innerHTML=html;
console.log(html);
startButton.onclick = () => {
    context.q1.display=true;
    html=templateScript(context);
    questions.innerHTML=html;
    startButton.style.display="none";
    questions.style.width='100%';
    questions.style.display='inline';
    console.log(questions.style.display);
}
