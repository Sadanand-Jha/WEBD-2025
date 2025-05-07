document.addEventListener('DOMContentLoaded', () => {
    function renderElement(element, container){
        let ele = document.createElement(element.type)
        ele.innerHTML = element.children
        for(let prop in element.props){
            ele.setAttribute(prop, element.props.prop);
        }
        container.appendChild(ele);
    }
    const ReactElement = {
        type : 'a',
        props : {
            href: "https://www.google.com",
            target: '_blank'
        },
        children: "Press the button to open google.com"
    }
    
    const mainContainer = document.getElementById('root')
    
    renderElement(ReactElement, mainContainer)
})