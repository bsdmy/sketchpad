const container = document.querySelector("#container");
container.setAttribute('style', 'background: gray; width: 289px; height: 289px; display: flex; flex-wrap: wrap;flex-direction:row;');
const block1 = document.createElement("div");
block1.classList.add("a")
block1.setAttribute('style', 'background: black; ; height: 16px; box-sizing: border-box; color:white; width 16px; display:flex;padding:8px; flex: 0 0 auto; margin: 1px')
let x = block1.cloneNode(true);
for(let i = 0; i< 256; i++){
    const x = document.createElement("div");
    x.setAttribute('style', 'background: black; ; height: 16px; box-sizing: border-box; color:white; width 16px; display:flex;padding:8px; flex: 0 0 auto; margin: 1px');
    x.addEventListener('mouseover', changefunc)
    container.appendChild(x);
}
function changefunc(e){
    console.log(e);
    e.target.style.backgroundColor = '#fefefe';

}

