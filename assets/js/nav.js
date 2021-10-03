let getNav = document.getElementById("MobNav")

let navState = false

function navBar() {

    
    if(navState){
        navState = false
        getNav.style.display = "none"
    } else {
        navState = true
        getNav.style.display = "block"
    }
    

}

