//Vivus
$(function () {

    //new Vivus('#svg2', {duration: 350},
    //    function () {
    //        if (window.console) {
    //            console.log('Animation finished');
    //        }
    //    });
    new Vivus('#svg2', {}, function (obj) {
        obj.el.classList.add('finished');
    });

});