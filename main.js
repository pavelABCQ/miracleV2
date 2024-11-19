function getid(x) {
    return document.getSelection(x)
}

const photo = ["media/photo1.jpg","media/photo2.jpg","media/photo3.jpg","media/photo4.jpg","media/photo5.jpg"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
gallery.style.background='rgba(0,0,0,0)'
logo= document.getElementsByClassName('logo')
square.style.height=square.style.width
for (i in photo) {
    
    gallery.innerHTML += '<div class = "test"></div>'
    gallery.getElementsByClassName("test")[i].style.background='url('+photo[i]+')'
    gallery.getElementsByClassName("test")[i].style.backgroundPosition = 'center center'
    gallery.getElementsByClassName("test")[i].style.backgroundRepeat = 'no-repeat'
    gallery.getElementsByClassName("test")[i].style.backgroundSize = 'cover'
    gallery.getElementsByClassName("test")[i].style.height = '95%'
}
test = document.getElementsByClassName("test")
let t=0
function scr(){
        if (body.scrollTop+1500>gallery.offsetTop) {
                gallery.addEventListener('scroll',sss)
        }
    }

function sss() {
    console.log(test[0].offsetHeight)

    t = setTimeout(gallery.scrollBy(left=0,top=test[0].offsetHeight),5000)
    t
}