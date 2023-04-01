const sounds = {
    "q": document.getElementById("sound_q"),
    "w": document.getElementById("sound_w"),
    "e": document.getElementById("sound_e"),
    "r": document.getElementById("sound_r"),
    "t": document.getElementById("sound_t"),
    "y": document.getElementById("sound_y"),
    "u": document.getElementById("sound_u"),
    "a": document.getElementById("sound_a"),
    "s": document.getElementById("sound_s"),
    "d": document.getElementById("sound_d"),
    "f": document.getElementById("sound_f"),
    "g": document.getElementById("sound_g"),
    "h": document.getElementById("sound_h"),
    "j": document.getElementById("sound_j"),
    "z": document.getElementById("sound_z"),
    "x": document.getElementById("sound_x"),
    "c": document.getElementById("sound_c"),
    "v": document.getElementById("sound_v"),
    "b": document.getElementById("sound_b"),
    "n": document.getElementById("sound_n"),
    "m": document.getElementById("sound_m"),
};

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key in sounds) {
        sounds[key].currentTime = 0;
        sounds[key].play();
    }
});
