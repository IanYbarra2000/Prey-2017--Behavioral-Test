let template = $('#handlebars').html();
let templateScript = Handlebars.compile(template);
//Holds questions to use with handlebars
const context = {
    q1: {
        question : "You're planning a vacation. Go somewhere familiar you love, or try something new?", 
        answers : ['(a) Familiar','(b) New'],
        display : false
    },
    q2: {
        question : "You've been sentenced to death for your actions. How does this make you feel?", 
        answers : ["(a) Afraid. I don't know what will happen.","(b) Angry. No one has that right.","(c) Calm. It was worth it."],
        display : false
    },
    q3: {
        question : "A runaway train is bearing down on five people who are tied to the track. You can cause the train to switch tracks, but there is one person tied to the second track.", 
        answers : ["(a) Switch tracks.","(b) Do nothing."],
        display : false
    },
    q4: {
        question : "A runaway train is bearing down on five people. You're standing on the platform next to an enormously fat man. Pushing him into the track would stop the train.", 
        answers : ["(a) Push the fat man.","(b) Do nothing."],
        display : false
    },
    q5: {
        question : "A runaway train is bearing down on five people tied to the track. You could stop the train by jumping onto the track, but you would die.", 
        answers : ["(a) Jump on the tracks.","(b) Push the fat man.","(c) Do nothing."],
        display : false
    }
};
