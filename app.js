var tablinks = document.getElementsByClassName('tab-link');
var tabContent = document.getElementsByClassName('tab-content');
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabContent) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
var sidemenu = document.getElementById('sidemenu');
function openmenu() {
    sidemenu.style.right = '0';
}
function closemenu() {
    sidemenu.style.right = '-200px';
}
// Dought here........
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    msg.innerHTML = 'Message sent successfully..!!'
    setTimeout(function () {
        msg.innerHTML = ''
    }, 5000)
    form.reset()
})