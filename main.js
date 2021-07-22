console.log(data);

// function createTable() {
//     var tbody = document.getElementById("tbody")
//     // var button3 = document.createElement("button")
//     // button3.innerHTML = "that other button"
//     // button3.id = "button3"
//     // button3.className = "btn btn-primary"
//     for (var i = 0; i < data.length; i++) {

//         var tr = document.createElement("tr")
//         if (i % 2 == 0) {
//             tr.className = "table-primary"
//         }
//         else {
//             tr.style.color = "blue"
//         }
//         var td1 = document.createElement("td")
//         var td2 = document.createElement("td")
//         var td3 = document.createElement("td")

//         td1.innerHTML = data[i].name
//         td2.innerHTML = data[i].summary
//         td3.innerHTML = data[i].airdate

//         tr.appendChild(td1)
//         tr.appendChild(td2)
//         tr.appendChild(td3)
//         tbody.appendChild(tr)

//     }
// }
// createTable()

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

//hoisting function declaration
console.log(functionBelow("hello"));
function functionBelow(greet) {
  return `${greet} world`;
}
console.log(functionBelow("Hi"));

//function expression
const myFunction = function (msg) {
  console.log(msg);
};
myFunction("What's up?");

//function expression (arrow)
const arrowFunction = (msg) => {
  console.log(msg);
};
arrowFunction(`that's fucking awesome!`);

//array functions
//console.log("data", data)

// data.forEach((data, i) => {
//     console.log("i", i)
//     console.log("data", data)
// })

// data.forEach(function (data) {
//     console.log("data", data)
// })

// filter
const filteredArray = data.filter((e, _i) => {
  return e.airdate.includes("2021-07-08")
});
console.log(`filteredArray`, filteredArray);

//map
const mappedArray = data.map((data, i) => {
  if (i === 3) {
    data.text = "Busted";
  }
  return data;
});

//spread operator
const mappedArrayOne = data.map((data, _i) => {
  return {
    ...data,
    text: "What",
  };
});

console.log(`mappedArray`, mappedArrayOne);
console.log(`data`, data);

//AJAX & Fetch
// const url= "https://apis.is/earthquake/is?content-type=big bang"
// let data
// function getData() {
//     fetch(url).then(response=> {
//         console.log(`response`, response)
//         return response.json()
//     })
//         .then(data=> {
//             document.getElementById("loader").style.display="none"
//             //console.log(`data`, data)
//             data = data.results
//             //console.log(`data`, data)
//             renderTable()
//     })
// }
//console.log(`data`, data)

//templating
const mazen = 34;
const anna = 27;
const greetingMessage = "hello" + mazen + "you are cooler than anna!";
const templating = `hi ${mazen} how are you doing? `;

console.log(templating);

//fetching
// fetch(" https://api.tvmaze.com/schedule/full")
// .then((Response) => {
//     console.log("we got a response but no body available yet");
//     console.log(Response);
//     return Response.json()
// })
// .then((jsonData) => {
//     console.log("we got the data");
//     console.log(jsonData);
// })

//create a function called 'searchShow(query)'
function searchShow(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      createHtmlTable(jsonData);


    });
}

//function createTable() {
  // var tbody = document.getElementById("tbody")
  // var button3 = document.createElement("button")
  // button3.innerHTML = "that other button"
  // button3.id = "button3"
  // button3.className = "btn btn-primary"
  // for (var i = 0; i < data.length; i++) {


  //     var tr = document.createElement("tr")
  //     if (i % 2 == 0) {
  //         tr.className = "table-primary"
  //     }
  //     else {
  //         tr.style.color = "red"
  //     }
  //     var td1 = document.createElement("td")
  //     var td2 = document.createElement("td")
  //     var td3 = document.createElement("td")
  //     var td4 = document.createElement("td")

  //     td1.innerHTML = data[i].name
  //     td2.innerHTML = data[i].summary
  //     td3.innerHTML = data[i].airdate
  //     td4.innerHTML = data[i].url

  //     tr.appendChild(td1)
  //     tr.appendChild(td2)
  //     tr.appendChild(td3)
  //     tr.appendChild(td4)
  //     tbody.appendChild(tr)

  // }
  // tbody.appendChild(button3)
// }
//createTable ()

// function helloEvent() {
//   createTable()
//   var button3 = document.getElementById("button3")
//   button3.addEventListener("click", function (event) {
//       console.log(`event`, event.target.id)
//   })
//   console.log("Hello button")
//}

// var myButton = document.getElementById("myButton")

// myButton.addEventListener("click", function (event) {
//   console.log(`event`, event.target.id)
// })


if (document.title== "Home") {
    window.onload = () => {
        const searchFieldElement = document.getElementById("searchField")
        searchFieldElement.onkeyup = (event) => {
            searchShow(searchFieldElement.value)
        };
    }

}

// fetching the data
const getData= () => {
  fetch ("https://api.tvmaze.com/search/shows?").then((response) => {
    return response.json();
  }) .then((data) => {
    console.log("data", data)
    createHtmlTable(data)
  })
}

//turn fetch in async/await
const getDataAsync = async () => {
  const response = await fetch ("https://api.tvmaze.com/search/shows?")
  console.log("response :>> ", response);

  const data = await response.json()
  console.log("data :>>", data);
  
  createHtmlTable(data)
  createDropDown(data)

  return data
}
async function getDataDeclarative() {

}

// function for creating table and dropDown 
const createHtmlTable = (showsList) => {

  let table = document.querySelector("#tbody");
  table.innerHTML= ""
  showsList.forEach((ele, i) => {
    let row = document.createElement("tr");
    row.id = `table-row-${i}`
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerHTML = ele.show.name;
    row.appendChild(column);

    let column2 = document.createElement("td")
    column2.innerHTML = ele.show.summary;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    

    const date = new Date(ele.show.premiered).toLocaleString("de-DE", { day: "2-digit", month: "long", year: "2-digit" })
    console.log("date:>>", date);
    column3.innerHTML= date;
    row.appendChild(column3);
  })
}

