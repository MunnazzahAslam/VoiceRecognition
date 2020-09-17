const button=document.querySelector('.talk');
const content=document.querySelector('.content');
const SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition= new SpeechRecognition();
Recognition.onstart=function(){
    console.log('Voice Recognition is activated, you can speak now');
};

const greetings=['Doing good you little piece of love','I am good','Alhamdulillah'];

Recognition.onresult=function(e){
    const current= e.resultIndex;
    const transcript=e.results[current][0].transcript;
    content.textContent=transcript;
    readoutLoud(transcript);
};

button.addEventListener('click',()=>{
    Recognition.start();
});

function readoutLoud(message){
    const speech=new SpeechSynthesisUtterance();
    speech.text='Sorry I dont know the answer, try asking something else!';

    if(message.includes('how are you')){
        const finalmessage= greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalmessage;
    } 
    speech.volume=1;
    speech.pitch=1;
    speech.rate=1;
    window.speechSynthesis.speak(speech);
}
