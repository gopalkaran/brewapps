const tabs = document.querySelectorAll('.list-item')
console.log(tabs)
tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})