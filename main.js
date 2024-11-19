function getid(x) {
    return document.getSelection(x)
}

const photo = ["media/clown.jpg","media/clownwom.jpg","media/randphoto.bmp","media/randphoto2.bmp"]

iconsoc = document.getElementById('square')
iconsoc.style.height= '100%'
const body = document.body
const gallery = document.getElementById('gallery')
for (i in photo) {
    gallery.style.background='rgba(0,0,0,0)'
    gallery.innerHTML += '<div class = "test"></div>'
    gallery.getElementsByClassName("test")[i].style.background='url('+photo[i]+')'
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