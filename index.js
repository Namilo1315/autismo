function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

document.getElementById('manzana').addEventListener('click', function() {
    speak('Comer manzana');
    
});
document.getElementById('banana').addEventListener('click', function() {
    speak('Comer banana');
    
});
document.getElementById('naranja').addEventListener('click', function() {
    speak('Comer naranja');
    
});
document.getElementById('frutilla').addEventListener('click', function() {
    speak('Comer frutilla');
    
});
document.getElementById('sandia').addEventListener('click', function() {
    speak('Comer sandia');
    
});
document.getElementById('mandarina').addEventListener('click', function() {
    speak('Comer mandarina');
    
});
document.getElementById('uva').addEventListener('click', function() {
    speak('Comer uvas');
    
});
document.getElementById('pera').addEventListener('click', function() {
    speak('Comer pera');
    
});