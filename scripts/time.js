(function() {

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var unusedVariable = 4; // to demonstrate JSHint warnings

        document.getElementById('clock').innerHTML = h+":"+twoDigits(m)+":"+twoDigits(s);
        setTimeout(function(){startTime();},500);
    }

    function twoDigits(n) {
        if (n < 10) {
            n = "0" + n;
        }
        return n;
    }

    startTime();
})();