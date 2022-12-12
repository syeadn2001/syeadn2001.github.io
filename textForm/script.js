function show_value(x) {
    document.getElementById("slider_value").innerHTML = x;
}

function change(fontName) {
    const name = document.getElementById('name');
    const tcolor = document.getElementById('tcolor').value;
    const bcolor = document.getElementById('bcolor').value;
    const tsize = document.getElementById('tsize').value;
    const fontType = fontName;
    const reset = document.getElementById('reset');

    // const fontinfo = tsize + 'px ' + fontType

    name.style.color = tcolor;
    name.style.backgroundColor = bcolor;
    name.style.fontSize = tsize + 'px';

}

function changeFont(fontName) {
    document.getElementById('name').style.fontFamily = fontName;
}


function callBoth(x) {
    show_value(x);
    change();
}