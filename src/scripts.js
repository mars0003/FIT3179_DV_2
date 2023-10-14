
function switchChart() {
    if (document.getElementById('map2').style.display == 'none') {
        document.getElementById('map').style.display = 'none';
        document.getElementById('map2').style.display = 'block';
    } else {
        document.getElementById('map2').style.display = 'none';
        document.getElementById('map').style.display = 'block';
        currentChart = 1;
    }
}

function switchChart2() {
    if (document.getElementById('box-plot').style.display == 'none') {
        document.getElementById('line').style.display = 'none';
        document.getElementById('box-plot').style.display = 'block';
    } else {
        document.getElementById('box-plot').style.display = 'none';
        document.getElementById('line').style.display = 'block';
        currentChart = 1;
    }
}

function switchPage() {
    var page1 = document.querySelector(".book-page");
    var page2 = document.querySelector(".book-page1");

    if (page1.style.display === "none") {
        page1.style.display = "flex";
        page2.style.display = "none";
    } else {
        page1.style.display = "none";
        page2.style.display = "flex";
    }
}

