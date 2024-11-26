function getid(x) {
    return document.getSelection(x)
}

const photo = ["media/photo1.jpg","media/photo2.jpg","media/photo3.jpg","media/photo4.jpg","media/photo5.jpg"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
let logo= document.getElementsByClassName('logo')
let test = document.getElementsByClassName("test")


square.style.height=square.style.width+ 'px'
gallery.style.height= window.innerHeight/1.3 +'px'
body.addEventListener('scroll',e=>{
    console.log(body.scrollTop)
    if (gallery.offsetTop<body.scrollTop+window.innerHeight){
        let photoscr = setInterval(autophotoscroll,4000)
    }
})

for (i in photo) {
    
    gallery.innerHTML += '<div class = "test"></div>'
    gallery.getElementsByClassName("test")[i].style.background='url('+photo[i]+')'
    gallery.getElementsByClassName("test")[i].style.backgroundPosition = 'center center'
    gallery.getElementsByClassName("test")[i].style.backgroundRepeat = 'no-repeat'
    gallery.getElementsByClassName("test")[i].style.backgroundSize = 'cover'
    gallery.getElementsByClassName("test")[i].style.height = '95%'
}


function autophotoscroll(){
    gallery.scrollBy({top:20,left:0,behavior:"smooth"})
}
