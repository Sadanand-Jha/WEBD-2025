const heading = document.getElementsByClassName('heading')
console.log(heading)

const divs = document.querySelector('.div');
// divs.innerHTML = `
// <ul>
// <li> Helloworld </li>
// </ul>
//`

const new_li = document.createElement('ul')
new_li.innerHTML = `
<li> Helloworld </li>
`

divs.insertAdjacentElement('beforebegin', new_li)


console.log(new_li);
// divs.appendChild(new_li)

const content = document.querySelector('#content');
const button = document.querySelector('button')
button.addEventListener('click', (e) => {
    if(content.innerText === 'learning js')content.innerText = 'meow'
    else content.innerHTML = 'learning js'
})


const bulb_btn = document.querySelector('.bulb')

bulb_btn.addEventListener('click', (e) => {
    let on = bulb_btn.classList.contains('on');
    const image = bulb_btn.previousElementSibling;
    // console.log(image)
    if(on){
        bulb_btn.classList.remove('on')
        bulb_btn.innerText = 'Turn On'
        image.setAttribute('src', './bulb_off.jpg')
    }
    else{
        bulb_btn.classList.add('on')
        bulb_btn.innerText = 'Turn Off'
        image.setAttribute('src', './bulb_on.jpg')
    }
})