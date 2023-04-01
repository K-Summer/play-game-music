fetch('./icons/keys/wid icons/do.svg')
    .then(response => response.text())
    .then(svgText => {
        // 将SVG文本内容存储在变量中
        var svg1 = svgText;

        // 创建包含SVG图片的元素，并添加到页面中
        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg1;
    });
fetch('./icons/keys/wid icons/fa.svg')
    .then(response => response.text())
    .then(svgText => {
        // 将SVG文本内容存储在变量中
        var svg2 = svgText;

        // 创建包含SVG图片的元素，并添加到页面中
        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg2;
    });
fetch('./icons/keys/wid icons/la.svg')
    .then(response => response.text())
    .then(svgText => {
        // 将SVG文本内容存储在变量中
        var svg3 = svgText;

        // 创建包含SVG图片的元素，并添加到页面中
        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg3;
    });
fetch('./icons/keys/wid icons/mi.svg')
    .then(response => response.text())
    .then(svgText => {
        // 将SVG文本内容存储在变量中
        var svg4 = svgText;

        // 创建包含SVG图片的元素，并添加到页面中
        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg4;
    });
fetch('./icons/keys/wid icons/re.svg')
    .then(response => response.text())
    .then(svgText => {
        // 将SVG文本内容存储在变量中
        var svg5 = svgText;

        // 创建包含SVG图片的元素，并添加到页面中
        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg5;
    });
fetch('./icons/keys/wid icons/so.svg')
    .then(response => response.text())
    .then(svgText => {
        // 将SVG文本内容存储在变量中
        var svg6 = svgText;

        // 创建包含SVG图片的元素，并添加到页面中
        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg6;
    });
fetch('./icons/keys/wid icons/ti.svg')
    .then(response => response.text())
    .then(svgText => {
        // 将SVG文本内容存储在变量中
        var svg7 = svgText;

        // 创建包含SVG图片的元素，并添加到页面中
        var svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = svg7;
    });

// 获取所有需要替换svg图片的div元素，并为它们分别添加点击事件监听器

var q = document.getElementById("q");
var w = document.getElementById("w");
var e = document.getElementById("e");

q.addEventListener("click", function () {
    // 将id为“q”的div元素的svg图片替换为变量svg1中存储的图片
    q.innerHTML = svg1;
});

w.addEventListener("click", function () {
    // 将id为“w”的div元素的svg图片替换为变量svg2中存储的图片
    w.innerHTML = svg2;
});

e.addEventListener("click", function () {
    // 将id为“e”的div元素的svg图片替换为变量svg3中存储的图片
    e.innerHTML = svg3;
});
