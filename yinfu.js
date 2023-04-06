// 将需要替换的 SVG 图标文件路径存储在数组中
const iconPaths = [
    './icons/keys/wid icons/do.svg',
    './icons/keys/wid icons/fa.svg',
    './icons/keys/wid icons/la.svg',
    './icons/keys/wid icons/mi.svg',
    './icons/keys/wid icons/re.svg',
    './icons/keys/wid icons/so.svg',
    './icons/keys/wid icons/ti.svg',
];

// 存储所有获取到的 SVG 图片文本内容的数组
const svgs = [];

// 使用 Promise.all 方法并行获取所有 SVG 图片文本内容
Promise.all(iconPaths.map((path) => fetch(path).then((res) => res.text())))
    .then((svgTexts) => {
        // 将所有 SVG 图片文本内容存储在 svgs 数组中
        svgs.push(...svgTexts);

        // 获取所有需要替换 SVG 图标的 div 元素，并为它们分别添加点击事件监听器
        const q = document.getElementById('q');
        const w = document.getElementById('w');
        const e = document.getElementById('e');
        const r = document.getElementById('r');
        const t = document.getElementById('t');
        const y = document.getElementById('y');
        const u = document.getElementById('u');

        q.addEventListener('click', () => replaceSvg(q, svgs[0]));
        w.addEventListener('click', () => replaceSvg(w, svgs[1]));
        e.addEventListener('click', () => replaceSvg(e, svgs[2]));
        r.addEventListener('click', () => replaceSvg(r, svgs[3]));
        t.addEventListener('click', () => replaceSvg(t, svgs[4]));
        y.addEventListener('click', () => replaceSvg(y, svgs[5]));
        u.addEventListener('click', () => replaceSvg(u, svgs[6]));
    })
    .catch((err) => {
        console.error(err);
    });

// 将指定的 div 元素中的 SVG 图标替换为指定的 SVG 文本内容
function replaceSvg(elem, svgText) {
    elem.innerHTML = svgText;
}
