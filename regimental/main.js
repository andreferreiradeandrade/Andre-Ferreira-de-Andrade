//alert("Teste");
const audioElements = document.querySelectorAll('audio');
audioElements.forEach(audio => {
    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
    });
});

function tocaSomKick(som_kick) {
    const sound = document.querySelector(`#${som_kick}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function tocaSomSnare(som_snare){
    const sound = document.querySelector(`#${som_snare}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function tocaSomHithat(som_hithat){
    const sound = document.querySelector(`#${som_hithat}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function tocaSomClap(som_clap){
    const sound = document.querySelector(`#${som_clap}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function tocaSomHithatroll(som_hithatroll){
    const sound = document.querySelector(`#${som_hithatroll}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function tocaSomH808(som_808){
    const sound = document.querySelector(`#${som_808}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function tocaSomPerc(som_perc){
    const sound = document.querySelector(`#${som_perc}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}
function tocaSomCano(som_cano){
    const sound = document.querySelector(`#${som_cano}`);
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

document.querySelector(".tecla_kick").addEventListener('click', () => tocaSomKick('som_kick'));
document.querySelector(".tecla_snare").addEventListener('click', () => tocaSomSnare('som_snare'));
document.querySelector(".tecla_hithat").addEventListener('click', () => tocaSomHithat('som_hithat'));
document.querySelector(".tecla_clap").addEventListener('click', () => tocaSomClap('som_clap'));
document.querySelector(".tecla_hithatroll").addEventListener('click', () => tocaSomHithatroll('som_hithatroll'));
document.querySelector(".tecla_808").addEventListener('click', () => tocaSomH808('som_808'));
document.querySelector(".tecla_perc").addEventListener('click', () => tocaSomPerc('som_perc'));
document.querySelector(".tecla_cano").addEventListener('click', () => tocaSomCano('som_cano'));