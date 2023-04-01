fetch('./icons/keys/wid icons/do.svg')
    .then(response => response.text())
    .then(svgText => {

        var svg1 = svgText;


        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg1;
    });
fetch('./icons/keys/wid icons/fa.svg')
    .then(response => response.text())
    .then(svgText => {

        var svg2 = svgText;


        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg2;
    });
fetch('./icons/keys/wid icons/la.svg')
    .then(response => response.text())
    .then(svgText => {

        var svg3 = svgText;


        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg3;
    });
fetch('./icons/keys/wid icons/mi.svg')
    .then(response => response.text())
    .then(svgText => {

        var svg4 = svgText;


        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg4;
    });
fetch('./icons/keys/wid icons/re.svg')
    .then(response => response.text())
    .then(svgText => {

        var svg5 = svgText;


        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg5;
    });
fetch('./icons/keys/wid icons/so.svg')
    .then(response => response.text())
    .then(svgText => {

        var svg6 = svgText;


        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg6;
    });
fetch('./icons/keys/wid icons/ti.svg')
    .then(response => response.text())
    .then(svgText => {

        var svg7 = svgText;


        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg7;
    });



var q = document.getElementById("q");
var w = document.getElementById("w");
var e = document.getElementById("e");

q.addEventListener("click", function () {

    q.innerHTML = svg1;
});

w.addEventListener("click", function () {

    w.innerHTML = svg2;
});

e.addEventListener("click", function () {

    e.innerHTML = svg3;
});
