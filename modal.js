
const previews = document.querySelectorAll(".gallery img")
var modal = document.getElementById("myModal");
const original = document.querySelector(".modal-content")
var modalImg = document.getElementById("img01")


previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.style.display = "block";
        const originalSrc = preview.getAttribute('data-original');
        console.log(originalSrc)
        original.src = `img/${originalSrc}`;
    })
})

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
modal.addEventListener('touchstart', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
      }
})
//window.onclick = function(event)  {
//    if (event.target == modal) {
//        modal.style.display = "none";
//      }
//}


