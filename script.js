const navAlternar = document.querySelector(".nav-alternar")
const links = document.querySelector(".links")

navAlternar.addEventListener('click', function(){
    //console.log(links.classList.contains('random'))
    // if(links.classList.contains("show-links")) {
    //    links.classList.remove("show-links")
    // } else {
    //    links.classList.add("show-links")
    // }
    links.classList.toggle("show-links")
})
