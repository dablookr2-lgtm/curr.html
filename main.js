const questions = [

{
q:"बिहार की राजधानी क्या है?",
options:["पटना","गया","भागलपुर","दरभंगा"],
answer:0,
exp:"पटना बिहार की राजधानी है"
},
{
q:"गंगा नदी बिहार में सबसे पहले किस जिले से प्रवेश करती है?",
options:["बक्सर","पटना","गया","नालंदा"],
answer:0,
exp:"गंगा नदी बिहार में बक्सर जिले से प्रवेश करती है"
},
{
q:"नालंदा विश्वविद्यालय किसके लिए प्रसिद्ध था?",
options:["शिक्षा","व्यापार","कृषि","युद्ध"],
answer:0,
exp:"नालंदा प्राचीन शिक्षा का प्रमुख केंद्र था"
},
{
q:"महात्मा गांधी सेतु किस नदी पर स्थित है?",
options:["गंगा","यमुना","कोसी","सोन"],
answer:0,
exp:"यह पुल गंगा नदी पर स्थित है"
},
{
q:"क्षेत्रफल के अनुसार बिहार का सबसे बड़ा जिला कौन सा है?",
options:["पश्चिम चंपारण","पटना","गया","नालंदा"],
answer:0,
exp:"पश्चिम चंपारण बिहार का सबसे बड़ा जिला है"
},
{
q:"बिहार दिवस कब मनाया जाता है?",
options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],
answer:0,
exp:"22 मार्च को बिहार दिवस मनाया जाता है"
},
{
q:"कोसी नदी को किस नाम से जाना जाता है?",
options:["बिहार का शोक","जीवन रेखा","गंगा पुत्री","स्वर्ण नदी"],
answer:0,
exp:"कोसी नदी को बिहार का शोक कहा जाता है"
},
{
q:"महाबोधि मंदिर कहाँ स्थित है?",
options:["बोधगया","पटना","राजगीर","नालंदा"],
answer:0,
exp:"महाबोधि मंदिर बोधगया में स्थित है"
},
{
q:"तख्त श्री हरमंदिर साहिब कहाँ स्थित है?",
options:["पटना","गया","भागलपुर","मुजफ्फरपुर"],
answer:0,
exp:"यह पटना में स्थित है"
},
{
q:"बिहार का राज्य पशु कौन सा है?",
options:["बैल","बाघ","हाथी","हिरण"],
answer:0,
exp:"बिहार का राज्य पशु बैल है"
},
];

let index = 0;
let selected = {};
let marked = {};
let resultStatus = {};
let wrong = [];
let timer;
let time = 20;

/* ================= LOAD QUESTION ================= */
function load(){
    let q = questions[index];

    document.getElementById("qText").innerText =
    "Q"+(index+1)+": "+q.q;

    document.getElementById("status").innerText =
    "Q"+(index+1)+"/"+questions.length;

    let box = document.getElementById("options");
    box.innerHTML = "";

    q.options.forEach((o,i)=>{
        let div = document.createElement("div");
        div.className = "option";
        div.innerText = o;

        if(selected[index] === i){
            div.classList.add("selected");
        }

        div.onclick = ()=>{
            selected[index] = i;
            load();
            renderPalette();
        };

        box.appendChild(div);
    });

    updateBar();
}

/* ================= TIMER ================= */
function startTimer(){
    clearInterval(timer);
    time = 20;

    let bar = document.getElementById("timerBar");
    let text = document.getElementById("timerText");

    bar.style.width = "100%";
    bar.style.background = "#ffeb3b";

    timer = setInterval(()=>{
        time--;

        text.innerText = "⏳ " + time;

        // 🔥 decreasing bar
        bar.style.width = (time/20)*100 + "%";

        if(time <= 5){
            bar.style.background = "red";
        }

        if(time <= 0){
            autoNext();
        }

    },1000);
}

/* ================= NAVIGATION ================= */
function next(){
    if(index < questions.length - 1){
        index++;
        load();
        renderPalette();
        startTimer();
    }
}

function prev(){
    if(index > 0){
        index--;
        load();
        renderPalette();
        startTimer();
    }
}

function autoNext(){
    clearInterval(timer);

    if(index < questions.length - 1){
        index++;
        load();
        renderPalette();
        startTimer();
    }else{
        submitQuiz();
    }
}

/* ================= MARK ================= */
function mark(){
    marked[index] = true;
    renderPalette();
}

/* ================= PALETTE ================= */
function renderPalette(){
    let p = document.getElementById("palette");
    p.innerHTML = "";

    questions.forEach((_, i)=>{

        let b = document.createElement("div");
        b.className = "qbtn";
        b.innerText = i + 1;

        // 🟢 correct
        if(resultStatus[i] === "correct"){
            b.classList.add("correct");
            b.innerHTML = i+1 + " ✔";
        }

        // 🔴 wrong
        else if(resultStatus[i] === "wrong"){
            b.classList.add("wrong");
            b.innerHTML = i+1 + " ❌";
        }

        // 🟠 marked
        else if(marked[i]){
            b.classList.add("marked");
        }

        // 🔵 answered
        else if(selected[i] !== undefined){
            b.classList.add("answered");
        }

        b.onclick = ()=>{
            index = i;
            load();
            startTimer();
        };

        p.appendChild(b);
    });
}

/* ================= PROGRESS BAR ================= */
function updateBar(){
    document.getElementById("bar").style.width =
    ((index+1)/questions.length)*100 + "%";
}

/* ================= SUBMIT ================= */
function submitQuiz(){

    let score = 0;
    wrong = [];
    resultStatus = {};

    questions.forEach((q,i)=>{

        if(selected[i] === q.answer){
            score++;
            resultStatus[i] = "correct";
        }else{
            resultStatus[i] = "wrong";
            wrong.push(i);
        }

    });

    let acc = Math.round((score/questions.length)*100);

    document.getElementById("quizBox").style.display = "none";
    document.getElementById("resultBox").style.display = "block";

    document.getElementById("scoreText").innerText =
    "Score: " + score + "/" + questions.length;

    document.getElementById("accuracy").innerText =
    "Accuracy: " + acc + "%";

    let rev = document.getElementById("review");
    rev.innerHTML = "";

    questions.forEach((q,i)=>{

        let div = document.createElement("div");
        div.className = "review-item";

        div.innerHTML =
        "<b>Q:</b> " + q.q +
        "<br><b>Your:</b> " + (q.options[selected[i]] || "Not Attempted") +
        "<br><b>Correct:</b> " + q.options[q.answer] +
        "<br><b>Exp:</b> " + q.exp;

        rev.appendChild(div);
    });

    renderPalette();
}

/* ================= INIT ================= */
load();
renderPalette();
startTimer();

function retestWrong(){

    if(wrong.length === 0){
        alert("🎉 कोई गलत question नहीं है!");
        return;
    }

    // 🔥 create new question set from wrong ones
    let newSet = wrong.map(i => questions[i]);

    // reset everything
    questions.splice(0, questions.length, ...newSet);

    index = 0;
    selected = {};
    marked = {};
    resultStatus = {};
    wrong = [];

    document.getElementById("resultBox").style.display = "none";
    document.getElementById("quizBox").style.display = "block";

    load();
    renderPalette();
    startTimer();
}
