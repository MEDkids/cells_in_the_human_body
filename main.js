function hideHandTap(id, flag) {
    if (flag) {
        var x = document.getElementById("hand_tap_" + id);
        var y = document.getElementById("circle_text_" + id);
    } else {
        var x = document.getElementById("circle_text_" + id);
        var y = document.getElementById("hand_tap_" + id);
    }

    var xOpacity = 1;
    var yOpacity = 0;
    var interval = setInterval(function () {
        if (xOpacity > 0) {
            xOpacity -= 0.1;
            yOpacity += 0.1;
            x.style.opacity = xOpacity;
            y.style.opacity = yOpacity;
        } else {
            clearInterval(interval);
            x.style.visibility = 'hidden';
            y.style.visibility = 'visible';
        }
    }, 50);
}

var previousClick = 0;
function showContent(id) {
    var x = document.getElementById("cell_type_" + id);
    var y = document.getElementById("cell_type_content_" + id);
    x.style.display = 'none';
    y.style.display = 'grid';

    if (previousClick != 0) {
        var p = document.getElementById("cell_type_" + previousClick);
        var q = document.getElementById("cell_type_content_" + previousClick);
        p.style.display = 'grid';
        q.style.display = 'none';
        console.log(previousClick);
    }
    previousClick = id;
    console.log(id);
}