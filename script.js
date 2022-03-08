var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code
var toggle = false
function background() {
    if(toggle){
        document.body.style.backgroundColor = "yellow";
        btn.innerHTML = 'Turn off';
        toggle = false;
        console. log('Light on')
    } else{
        document.body.style.backgroundColor = "black";
        btn.innerHTML = 'Turn on';
        toggle = true;
        console. log('Light off')
    }
}
btn.onclick = background;
// schijf hier tussen je code