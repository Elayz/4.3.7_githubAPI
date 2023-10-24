//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
let projectName = document.getElementById('name');
let ownerName = document.getElementById('owner');
let starsCount = document.getElementById('stars');
let pushBtn1 = document.getElementById('pushBtn1');
let pushBtn2 = document.getElementById('pushBtn2');
let pushBtn3 = document.getElementById('pushBtn3');
let pushBtn4 = document.getElementById('pushBtn4');
let pushBtn5 = document.getElementById('pushBtn5');
let inpuT = document.getElementById('inpuT');
let reposName

//------------------------------------------------------debounce
const logValue = () => {
    reposName = inpuT.value;
    fetch(`https://api.github.com/search/repositories?q=${reposName}`)
        .then(response => response.json())
        .then(data => {
            pushBtn1.textContent = data.items[0].name
            pushBtn2.textContent = data.items[1].name
            pushBtn3.textContent = data.items[2].name
            pushBtn4.textContent = data.items[3].name
            pushBtn5.textContent = data.items[4].name
        })
        .catch(err => console.log('empty value'));
}
const debounce = (fn, debounceTime) => {
    let timeout;
    return function (){
        const fnCall = () => {fn.apply(this, arguments)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, debounceTime)

    }
};
const onChange = debounce(logValue, 300)
inpuT.addEventListener('keyup', onChange)
//------------------------------------------------------debounce

function clickRemove() {
    console.log(this)
    console.log(this.parentNode);
    const parentElement = this.parentNode
    parentElement.remove()
}


//------------------------------------------------------fetch1
function fetchElement(repName, index) {
    fetch(`https://api.github.com/search/repositories?q=${repName}`)
        .then(response => response.json())
        .then(data => {
            let pinkSec = document.getElementById('pinkSection');
            let div1 = document.createElement('div')
            div1.classList.add('newDiv1')
            let div = document.createElement('div')
            div.classList.add('newDiv')

            let p1 = document.createElement('p'),
                p2 = document.createElement('p'),
                p3 = document.createElement('p')
            p1.innerHTML = `NAME: ${data.items[index].name}`
            p2.innerHTML = `OWNER: ${data.items[index].owner.login}`
            p3.innerHTML = `STARS: ${data.items[index].stargazers_count} stars`

            let img = document.createElement('img')
            img.src="imgs/cross-svgrepo-com.svg"
            img.onclick=clickRemove

            div.appendChild(p1)
            div.appendChild(p2)
            div.appendChild(p3)

            div1.appendChild(div)
            div1.appendChild(img)

            pinkSec.appendChild(div1)
        })
        .catch(err => console.log(err));
}

pushBtn1.addEventListener('click',function (){
    fetchElement(reposName, 0);
})
pushBtn2.addEventListener('click',function (){
    fetchElement(reposName, 1);
})
pushBtn3.addEventListener('click',function (){
    fetchElement(reposName, 2);
})
pushBtn4.addEventListener('click',function (){
    fetchElement(reposName, 3);
})
pushBtn5.addEventListener('click',function (){
    fetchElement(reposName, 4);
})
//------------------------------------------------------fetch1

// let pinkSec = document.getElementById('pinkSection');
// let div = document.createElement('div')
// div.classList.add('newDiv')
//
// let p1 = document.createElement('p'),
//     p2 = document.createElement('p'),
//     p3 = document.createElement('p')
// p1.innerHTML = 'NAME:'
// p2.innerHTML = 'OWNER:'
// p3.innerHTML = 'STARS:'
//
// div.appendChild(p1)
// div.appendChild(p2)
// div.appendChild(p3)
//
// pinkSec.appendChild(div)

