let sl = document.getElementById("stopLight")
let rl = document.getElementById("readyLight")
let gl = document.getElementById("goLight");

let s = document.getElementById("stopButton");
let r = document.getElementById("readyButton");
let g = document.getElementById("goButton");

s.style.backgroundColor = '#cf1124';
    r.style.backgroundColor = '#4b5069';
    g.style.backgroundColor = '#4b5069';

    sl.style.backgroundColor = '#cf1124';
    rl.style.backgroundColor = '#1f1d41';
    gl.style.backgroundColor = '#1f1d41';

function s1() {
    s.style.backgroundColor = '#cf1124';
    r.style.backgroundColor = '#4b5069';
    g.style.backgroundColor = '#4b5069';

    sl.style.backgroundColor = '#cf1124';
    rl.style.backgroundColor = '#1f1d41';
    gl.style.backgroundColor = '#1f1d41';
}

function r1() {
    s.style.backgroundColor = '#1f1d41';
    r.style.backgroundColor = '#f7c948';
    g.style.backgroundColor = '#1f1d41';

    sl.style.backgroundColor = '#1f1d41';
    rl.style.backgroundColor = '#f7c948';
    gl.style.backgroundColor = '#1f1d41';
}

function g1() {
    s.style.backgroundColor = '#4b5069';
    r.style.backgroundColor = '#4b5069';
    g.style.backgroundColor = '#199473';

    sl.style.backgroundColor = '#1f1d41';
    rl.style.backgroundColor = '#1f1d41';
    gl.style.backgroundColor = '#199473';
}