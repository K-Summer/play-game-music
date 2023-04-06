//创建，q,w,e,r,t,y,u,a,s,d,f,g,h,j,z,x,c,v,b,n,m,按钮，用于播放音符
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
    // 添加其他按键和音效
};

var lastPlayTime = {
    "q": 0,
    "w": 0,
    "e": 0,
    "r": 0,
    "t": 0,
    "y": 0,
    "u": 0,
    "a": 0,
    "s": 0,
    "d": 0,
    "f": 0,
    "g": 0,
    "h": 0,
    "j": 0,
    "z": 0,
    "x": 0,
    "c": 0,
    "v": 0,
    "b": 0,
    "n": 0,
    "m": 0,
}



let keysDown = {};

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key in sounds && !(key in keysDown)) {
        sounds[key].currentTime = 0;
        sounds[key].play();
        keysDown[key] = true;
    }
});

document.addEventListener("keyup", function (event) {
    const key = event.key.toLowerCase();

    if (key in keysDown && key in sounds) {
        delete keysDown[key];
    }
});