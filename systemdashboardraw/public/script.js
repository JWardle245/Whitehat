var data = [
    {
     "in_app": "SECORE",
     "in_delivery": "green",
     "detail1": "File was delivered successfully",
     "in_process": "amber",
     "detail2": "Files were processed with error",
     "out_app": "SECORE",
     "out_delivery": "red",
     "detail3": "File was not delivered"
    },
    {
        "in_app": "NCS",
        "in_delivery": "amber",
        "detail1": "File was delivered successfully",
        "in_process": "red",
        "detail2": "File was delivered successfully",
        "out_app": "NCS",
        "out_delivery": "green",
        "detail3": "File was delivered successfully"
    }
]
function fillTable(arr) {
    var out = '<tr><th colspan="3">Inbound</th><th colspan="2">Outbound</th></tr><tr><th>Partner Application</th><th>Delivery</th><th>Process</th><th>Partner Application</th><th>Delivery</th></tr>';
    var i;
    for(i = 0; i<arr.length; i++) {
        out += `<tr><td>` + arr[i].in_app + `</td>
                <td><div class="` + arr[i].in_delivery + `"><span class="detail">` + arr[i].detail1 + `</span></div></td>
                <td><div class="` + arr[i].in_process + `"><span class="detail">` + arr[i].detail2 + `</span></div></td>
                <td>` + arr[i].out_app + `</td>
                <td><div class="` + arr[i].out_delivery + `"><span class="detail">` + arr[i].detail3 + `</span></div></td></tr>`;
    }
    document.getElementById("table").innerHTML = out;
}

fillTable(data);