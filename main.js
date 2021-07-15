console.log(data);

function createTable() {
    var tbody = document.getElementById("tbody")
    // var button3 = document.createElement("button")
    // button3.innerHTML = "that other button"
    // button3.id = "button3"
    // button3.className = "btn btn-primary"
    for (var i = 0; i < data.length; i++) {


        var tr = document.createElement("tr")
        if (i % 2 == 0) {
            tr.className = "table-primary"
        }
        else {
            tr.style.color = "blue"
        }
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")

        td1.innerHTML = data[i].name
        td2.innerHTML = data[i].summary
        td3.innerHTML = data[i].airdate

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)

    }
}
createTable()

// function helloEvent() {
   
//     var button3 = document.getElementById("button3")
//     button3.addEventListener("click", function (event) {
//         console.log(`event`, event.target.id)
//     })
//     console.log("Hello button")
// }

// var myButton = document.getElementById("myButton")

// myButton.addEventListener("click", function (event) {
//     console.log(`event`, event.target.id)
// })