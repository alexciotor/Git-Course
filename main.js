// HTTP REQUEST



const xhr = new XMLHttpRequest()
const btn =document.querySelector('.btn')
const url ='./api/people.json'
console.log(xhr)
btn.addEventListener('click', ()=>{
getData(url)

})



function getData(){
xhr.open('GET',  url); 

xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status=== 200 ){
        const data = JSON.parse(xhr.responseText)
// const text = document.createElement('p')
// text.textContent = xhr.responseText;
// document.body.appendChild(text)
const displayData =data.map(item=>{
    return `<p>${item.name}</p>`
}).join('')
const element = document.createElement('div')
element.innerHTML=displayData
document.body.appendChild(element)
    }
    else{
        console.log({
            status: xhr.status,
            text:xhr.statusText,
            state: xhr.readyState
        })
    }
}
xhr.send();
}


// JSON