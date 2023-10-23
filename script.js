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




//------------------------------------------------------fetch1
function fetchElement(repName, index) {
    fetch(`https://api.github.com/search/repositories?q=${repName}`)
        .then(response => response.json())
        .then(data => {
            projectName.innerHTML = data.items[index].name;
            ownerName.innerHTML = data.items[index].owner.login;
            starsCount.innerHTML = data.items[index].stargazers_count + ' stars';
            inpuT.value = data.items[index].name;
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

