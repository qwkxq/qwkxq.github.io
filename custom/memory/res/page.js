var PageHelper = (function () {
    function initRem() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var baseFontSize = 16;
        var baseWidth = 375;
        var targetFontSize = (width / baseWidth * 16).toFixed(2);
        document.getElementsByTagName("html")[0].style.fontSize = targetFontSize;
    }

    return {
        initRem: initRem
    };
}());
PageHelper.initRem();