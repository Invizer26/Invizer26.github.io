$(document).ready(function() {
    for (let i = 1; i <= 4; i++) {
    let img = $(`img[src="images/speaker${i}.png"]`);
        img.hover(function (){
                img.prop('src', `images/speaker${i}h.png`)
            },
            function () {
                img.prop('src', `images/speaker${i}.png`)
        })
    }
    for (let i = 1; i <= 5; i++) {
        let img = $(`img[src="images/photo${i}.png"]`);
        img.hover(function (){
                img.prop('src', `images/photo${i}h.png`)
            },
            function () {
                img.prop('src', `images/photo${i}.png`)
            })
    }
})