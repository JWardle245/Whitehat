function random(id) {
    id.innerText = Math.random();
}
function disable(id) {
    if (id.innerText == "Disable") {
        id.innerText = "Enable";
        document.getElementById("myButton").disabled = true;
    }
    else {
        id.innerText = "Disable";
        document.getElementById("myButton").disabled = false;
    }
}

function displayKey(id) {
    document.getElementById("keyDisplay").innerHTML = "You typed " + id.value;
    id.value = "";
}

picture = document.getElementById("picture")
picture.addEventListener("mouseover", function() {
    picture.src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg";
});
picture.addEventListener("mouseout", function() {
    picture.src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg";
});

function displayDate() {
    document.getElementById("date").innerHTML = new Date();
}

function displayURL() {
    document.getElementById("url").innerHTML = window.location.href;
}