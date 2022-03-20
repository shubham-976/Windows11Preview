let taskbar = document.getElementsByClassName('taskbar')[0]
let start_menu = document.getElementsByClassName('start_menu')[0]

taskbar.addEventListener("click", ()=>{
    if(start_menu.style.bottom == "6.4vh")
    {
        start_menu.style.bottom = "-120.6vh"
    }
    else
    {
        start_menu.style.bottom = "6.4vh"
    }
})