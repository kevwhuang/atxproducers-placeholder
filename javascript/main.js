setInterval(() => {
    document.querySelector('#unsplash').style.backgroundImage =
        `url(https://source.unsplash.com/random/?music,producer,engineer?v=${Math.random()})`;
}, 15e3);

// =================================================================================================

const audio = document.querySelector('audio');
const mute = document.querySelector('.material-symbols-outlined');
const tracks = [
    'audio/b006-pop-house.mp3',
    'audio/b014-soul-house.mp3',
    'audio/b027-candy.mp3',
    'audio/b074-koan-sound.mp3',
    'audio/b083-astro.mp3',
    'audio/b094-future-retro.mp3',
    'audio/b101-temper.mp3',
    'audio/b102-autumn-skies.mp3',
    'audio/b109-future-urban.mp3',
    'audio/b118-synth-pop.mp3',
    'audio/b123-power-funk.mp3',
    'audio/b130-fantasy.mp3',
    'audio/b136-omega.mp3',
];

mute.addEventListener('click', () => {
    if (audio.muted) {
        const M = Math.round(Math.random() * tracks.length);
        document.querySelector('source').src = tracks[M];
        audio.load();
        audio.play();
        audio.muted = false;
        mute.innerHTML = 'volume_up';
    } else {
        audio.muted = true;
        mute.innerHTML = 'volume_off';
    }
});

addEventListener('visibilitychange', () => {
    switch (document.visibilityState) {
        case 'hidden':
            audio.pause();
            break;
        case 'visible':
            audio.play();
            break;
    }
});
