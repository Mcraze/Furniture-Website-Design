const toggleBtn = document.querySelector('.toggle-btn')
const toggleIcon = document.querySelector('.toggle-btn i')
const DropDown = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function (params) {
    
    DropDown.classList.toggle('open')

    const isOpen = DropDown.classList.contains('open')

    if (isOpen) {
        toggleIcon.classList = 'fa-solid fa-xmark'
    }
    else {
        toggleIcon.classList = 'fa-solid fa-bars'
    }
}