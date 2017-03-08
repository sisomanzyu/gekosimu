(function () {

    var canvas = null;
    var ctx = null;
    var entity_japan_infantry = null;

    document.addEventListener("DOMContentLoaded",
        function () {
            loadAssets();
        });

    function loadAssets() {
        canvas = document.getElementById('mainScreen');
        ctx = canvas.getContext('2d');
        entity_japan_infantry = new Image();
        entity_japan_infantry.src = 'img/japan/entity_japan_infantry_pro.png';

        entity_japan_infantry.onload = function () {
            ctx.drawImage(entity_japan_infantry, 0, 0);
        };

    }
})();