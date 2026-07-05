/* ================= TOPIC + SET DATA ================= */
const allTopics = {

history: {
set1: [
{q:"मौर्य साम्राज्य का संस्थापक कौन था?",options:["चंद्रगुप्त मौर्य","अशोक","हर्षवर्धन","समुद्रगुप्त"],answer:0,exp:"चंद्रगुप्त मौर्य ने मौर्य साम्राज्य बनाया"},
{q:"अशोक किसके लिए प्रसिद्ध था?",options:["युद्ध","धर्म","व्यापार","कृषि"],answer:1,exp:"अशोक धम्म नीति के लिए प्रसिद्ध था"},
{q:"नालंदा कहाँ था?",options:["बिहार","यूपी","MP","राजस्थान"],answer:0,exp:"नालंदा बिहार में था"},
{q:"गुप्त काल को क्या कहा जाता है?",options:["स्वर्ण युग","लौह युग","आधुनिक युग","कांस्य युग"],answer:0,exp:"इसे स्वर्ण युग कहते हैं"},
{q:"हर्षवर्धन कौन था?",options:["शासक","किसान","व्यापारी","सैनिक"],answer:0,exp:"हर्षवर्धन शासक था"}
],
set2: [
{q:"चाणक्य किसके गुरु थे?",options:["चंद्रगुप्त","अशोक","नेहरू","पटेल"],answer:0,exp:"चाणक्य चंद्रगुप्त के गुरु थे"},
{q:"पाटलिपुत्र कहाँ था?",options:["बिहार","यूपी","गुजरात","राजस्थान"],answer:0,exp:"पाटलिपुत्र बिहार में था"},
{q:"अशोक ने कौन सा धर्म अपनाया?",options:["बौद्ध","हिंदू","इस्लाम","जैन"],answer:0,exp:"अशोक ने बौद्ध धर्म अपनाया"},
{
q: "मौर्य साम्राज्य का संस्थापक कौन था?",
options: ["चंद्रगुप्त मौर्य", "अशोक", "हर्षवर्धन", "समुद्रगुप्त"],
answer: 0,
exp: "चंद्रगुप्त मौर्य ने मौर्य साम्राज्य की स्थापना की थी।"
},
{
q: "अशोक ने किस युद्ध के बाद बौद्ध धर्म अपनाया था?",
options: ["कलिंग युद्ध", "पानीपत युद्ध", "तराइन युद्ध", "प्लासी युद्ध"],
answer: 0,
exp: "कलिंग युद्ध के बाद अशोक ने बौद्ध धर्म अपनाया।"
},
{
q: "नालंदा विश्वविद्यालय किस राज्य में स्थित था?",
options: ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान"],
answer: 0,
exp: "नालंदा विश्वविद्यालय बिहार में स्थित था।"
},
{
q: "गुप्त काल को किस नाम से जाना जाता है?",
options: ["स्वर्ण युग", "लौह युग", "अंधकार युग", "कांस्य युग"],
answer: 0,
exp: "गुप्त काल को स्वर्ण युग कहा जाता है।"
},
{
q: "चाणक्य किस राजा के प्रमुख सलाहकार थे?",
options: ["चंद्रगुप्त मौर्य", "अशोक", "समुद्रगुप्त", "हर्षवर्धन"],
answer: 0,
exp: "चाणक्य चंद्रगुप्त मौर्य के सलाहकार थे।"
},
{
q: "समुद्रगुप्त को किस नाम से जाना जाता है?",
options: ["भारत का नेपोलियन", "भारत का अकबर", "भारत का अशोक", "भारत का चंद्रगुप्त"],
answer: 0,
exp: "समुद्रगुप्त को भारत का नेपोलियन कहा जाता है।"
},
{
q: "पाटलिपुत्र किस साम्राज्य की राजधानी थी?",
options: ["मौर्य साम्राज्य", "मुगल साम्राज्य", "गुप्त साम्राज्य", "मराठा साम्राज्य"],
answer: 0,
exp: "पाटलिपुत्र मौर्य साम्राज्य की राजधानी थी।"
},
{
q: "अशोक का शिलालेख किस लिपि में मिला है?",
options: ["ब्राह्मी", "देवनागरी", "अरबी", "रोमन"],
answer: 0,
exp: "अशोक के शिलालेख ब्राह्मी लिपि में मिले हैं।"
},
{
q: "गुप्त साम्राज्य की स्थापना किसने की थी?",
options: ["श्रीगुप्त", "चंद्रगुप्त मौर्य", "अशोक", "हर्षवर्धन"],
answer: 0,
exp: "गुप्त साम्राज्य की स्थापना श्रीगुप्त ने की थी।"
},
{
q: "प्राचीन भारत में शिक्षा का प्रमुख केंद्र कौन था?",
options: ["तक्षशिला", "दिल्ली", "पटना", "कानपुर"],
answer: 0,
exp: "तक्षशिला शिक्षा का प्रमुख केंद्र था।"
},
{q:"समुद्रगुप्त को क्या कहा जाता है?",options:["भारत का नेपोलियन","महान राजा","युद्धवीर","धर्मराज"],answer:0,exp:"उसे भारत का नेपोलियन कहते हैं"},
{q:"गुप्त काल किसलिए प्रसिद्ध है?",options:["कला और विज्ञान","युद्ध","कृषि","व्यापार"],answer:0,exp:"कला और विज्ञान के लिए"}
]
},

geography: {
set1: [
{q:"बिहार की राजधानी?",options:["पटना","गया","दरभंगा","भागलपुर"],answer:0,exp:"पटना राजधानी है"},
{q:"गंगा प्रवेश कहाँ से?",options:["बक्सर","पटना","गया","मुजफ्फरपुर"],answer:0,exp:"बक्सर से"},
{q:"कोसी नदी?",options:["बिहार का शोक","जीवन रेखा","गंगा","यमुना"],answer:0,exp:"बिहार का शोक"},
{
q: "भारत की सबसे लंबी नदी कौन सी है?",
options: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
answer: 0,
exp: "गंगा भारत की सबसे लंबी नदी मानी जाती है।"
},
{
q: "थार मरुस्थल किस राज्य में स्थित है?",
options: ["राजस्थान", "गुजरात", "पंजाब", "हरियाणा"],
answer:0,
exp:"थार मरुस्थल मुख्य रूप से राजस्थान में स्थित है।"
},
{q:"महाबोधि मंदिर?",options:["बोधगया","पटना","राजगीर","नालंदा"],answer:0,exp:"बोधगया में"},
{q:"सबसे बड़ा जिला?",options:["पश्चिम चंपारण","पटना","गया","नालंदा"],answer:0,exp:"पश्चिम चंपारण"}
],
set2: [
{q:"गंगा का उद्गम?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"},
{q:"भारत की लंबी नदी?",options:["गंगा","यमुना","कावेरी","गोदावरी"],answer:0,exp:"गंगा"},
{q:"थार मरुस्थल?",options:["राजस्थान","बिहार","यूपी","MP"],answer:0,exp:"राजस्थान"},
{q:"हिमालय कहाँ?",options:["उत्तर भारत","दक्षिण","पूर्व","पश्चिम"],answer:0,exp:"उत्तर भारत"},
{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"}
]
},

polity: {
set1: [
{q:"संविधान लागू?",options:["26 जनवरी 1950","15 अगस्त","26 जनवरी 1947","2 अक्टूबर"],answer:0,exp:"1950"},
{q:"लोकसभा?",options:["निचला सदन","उच्च सदन","न्यायालय","राज्य"],answer:0,exp:"निचला सदन"},
{q:"प्रधानमंत्री?",options:["सरकार प्रमुख","राज्यपाल","राष्ट्रपति","जज"],answer:0,exp:"सरकार प्रमुख"},
{q:"भारत क्या है?",options:["लोकतंत्र","राजशाही","तानाशाही","साम्राज्य"],answer:0,exp:"लोकतंत्र"},
{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","जज","किसान"],answer:0,exp:"राज्य प्रमुख"}
],
set2: [
{q:"संविधान निर्माता?",options:["अंबेडकर","गांधी","नेहरू","पटेल"],answer:0,exp:"अंबेडकर"},
{q:"मौलिक अधिकार?",options:["6","5","7","8"],answer:0,exp:"6"},
{q:"न्यायपालिका?",options:["न्याय देती है","कानून बनाती है","टैक्स","सेना"],answer:0,exp:"न्याय देती है"},
{q:"लोकतंत्र?",options:["जनता शासन","राजा","सेना","धर्म"],answer:0,exp:"जनता शासन"},
{q:"संसद?",options:["कानून बनाती","न्याय देती","लड़ाई","टैक्स"],answer:0,exp:"कानून बनाती"}
]
},

current: {
set1: [
{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},
{q:"स्वतंत्रता दिवस?",options:["15 अगस्त","26 जनवरी","2 अक्टूबर","1 मई"],answer:0,exp:"15 अगस्त"},
{q:"गणतंत्र दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"},
{q:"गांधी जयंती?",options:["2 अक्टूबर","15 अगस्त","26 जनवरी","1 मई"],answer:0,exp:"2 अक्टूबर"},
{q:"पर्यावरण दिवस?",options:["5 जून","1 मई","10 जून","12 अगस्त"],answer:0,exp:"5 जून"}
]
}

};

/* ================= GLOBAL ================= */
let currentTopic="history";
let currentSet="set1";
let questions=allTopics[currentTopic][currentSet];

let index=0;
let selected={};
let marked={};
let resultStatus={};

let timer;
let time=20;

/* ================= LOAD TOPIC ================= */
function loadTopic(topic){
currentTopic=topic;
currentSet=Object.keys(allTopics[topic])[0];
questions=allTopics[currentTopic][currentSet];
reset();
}

/* ================= LOAD SET ================= */
function loadSet(set){
currentSet=set;
questions=allTopics[currentTopic][set];
reset();
}

/* ================= RESET ================= */
function reset(){
index=0;
selected={};
marked={};
resultStatus={};

load();
render();
startTimer();
}

/* ================= LOAD QUESTION ================= */
function load(){

let q=questions[index];

document.getElementById("qText").innerText=
"Q"+(index+1)+": "+q.q;

document.getElementById("status").innerText=
currentTopic+" | "+currentSet+" | "+(index+1)+"/"+questions.length;

let box=document.getElementById("options");
box.innerHTML="";

q.options.forEach((o,i)=>{
let div=document.createElement("div");
div.className="option";
div.innerText=o;

if(selected[index]==i){
div.classList.add("selected");
}

div.onclick=()=>{
selected[index]=i;
load();
render();
};

box.appendChild(div);
});

updateBar();
}

/* ================= NAV ================= */
function next(){
if(index<questions.length-1){
index++;
load();
render();
startTimer();
}else submitQuiz();
}

function prev(){
if(index>0){
index--;
load();
render();
startTimer();
}
}

function mark(){
marked[index]=true;
render();
}

/* ================= PALETTE ================= */
function render(){

let p=document.getElementById("palette");
p.innerHTML="";

questions.forEach((q,i)=>{
let b=document.createElement("div");
b.className="qbtn";
b.innerText=i+1;

if(resultStatus[i]==="correct"){
b.classList.add("correct");
b.innerHTML=i+1+" ✔";
}
else if(resultStatus[i]==="wrong"){
b.classList.add("wrong");
b.innerHTML=i+1+" ❌";
}
else if(marked[i]){
b.classList.add("marked");
}
else if(selected[i]!==undefined){
b.classList.add("answered");
}

b.onclick=()=>{
index=i;
load();
render();
startTimer();
};

p.appendChild(b);
});
}

/* ================= PROGRESS ================= */
function updateBar(){
document.getElementById("bar").style.width=
((index+1)/questions.length)*100+"%";
}

/* ================= TIMER ================= */
function startTimer(){
clearInterval(timer);
time=20;

timer=setInterval(()=>{
time--;
document.getElementById("timerText").innerText="⏳ "+time;
document.getElementById("timerBar").style.width=(time/20)*100+"%";

if(time<=0) next();

},1000);
}

/* ================= SUBMIT ================= */
function submitQuiz(){

let score=0;
resultStatus={};

questions.forEach((q,i)=>{
if(selected[i]===q.answer){
score++;
resultStatus[i]="correct";
}else{
resultStatus[i]="wrong";
// ===== AUTO NEXT SET =====
setTimeout(() => {
let nextSet = getNextSetName();

if (nextSet) {
currentSet = nextSet;
questions = allTopics[currentTopic][currentSet];

reset();   // auto load next set
document.getElementById("quizBox").style.display="block";
document.getElementById("resultBox").style.display="none";

} else {
alert("🎉 All sets completed for " + currentTopic);
}
}, 1200);
}
});

document.getElementById("quizBox").style.display="none";
document.getElementById("resultBox").style.display="block";

document.getElementById("scoreText").innerText=
"Score: "+score+"/"+questions.length;

let rev=document.getElementById("review");
rev.innerHTML="";

questions.forEach((q,i)=>{
let div=document.createElement("div");
div.innerHTML=
"<b>Q:</b> "+q.q+
"<br><b>Your:</b> "+(q.options[selected[i]]||"Not Attempted")+
"<br><b>Correct:</b> "+q.options[q.answer]+
"<br><b>Exp:</b> "+q.exp;
rev.appendChild(div);
});

render();
}

/* ================= INIT ================= */
loadTopic("history");

function getAllSets(topic){
return Object.keys(allTopics[topic]);
}

function getNextSetName() {
let sets = Object.keys(allTopics[currentTopic]);
let i = sets.indexOf(currentSet);

if (i < sets.length - 1) {
return sets[i + 1];
}
return null;
}