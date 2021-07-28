//console.log(data);

// filter
const filteredArray = data.filter((e, _i) => {
  return e.summary && e.image;
});
console.log(`filteredArray`, filteredArray);

// combining two filters
// const filteredArray1 = data.filter((e,_i) => {
//   e.airdate=== showByAirdate && e.image === filterValue
//   sort(someIrrelevantSortMethod)
//   console.log(filteredArray1)
// })
//spread operator
const mappedArrayOne = data.map((data, _i) => {
  return {
    ...data,
    text: "What",
  };
});

console.log(`mappedArray`, mappedArrayOne);
console.log(`data`, data);

//create a function called 'searchShow(query)'
function searchShow(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      createHtmlTable(jsonData);
    });
}

// if (document.title == "Home") {
//   window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
      searchShow(searchFieldElement.value);
    };
//   };
// }

// fetching the data
const getData = () => {
  fetch("https://api.tvmaze.com/search/shows?")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      createHtmlTable(data);
      const shows = data.results;
      const showBlock = creatTvShowContainer(shows);
      tv - shows - searchable.appendChild(showBlock);
    });
};

/*
 <div class="tv-show">
            <section class="section">
                <img
                src="https://static.tvmaze.com/uploads/images/medium_landscape/335/838938.jpg"
                alt=""
                data-tvShow-id= "2123897"/>
            </section>
            <div class="content">
                <p id="content-close">X</p>
            </div>
        </div>
*/

// selecting elements from the DOM
// const inputElement = document.querySelector("#inputValues");
// const tvShowsSearchable = document.querySelector("#Tv-shows-searchable");

// // getting image of a tv-show

// function showSection(shows) {
//   return shows.map((show) => {
//     return `
//         <img src=${show.image} data-show-id=${show.id}/>
//     `;
//   });
// }

// function creatTvShowContainer(Shows) {
//   const tvShowElement = document.createElement("div");
//   tvShowElement.setAttribute("class", "show");

//   const showTemplate = `
//       <section class="section">
//               ${showSection(shows)}  
//             </section>
//             <div class="content">
//                 <p id="content-close">X</p>
//             </div>
//   `;
//   tvShowElement.innerHTML = showTemplate;
//   return tvShowElement;
// }



//function for creating table and dropDown
const createHtmlTable = (showsList) => {

  let table = document.querySelector("#table");
  table.innerHTML = "";
  showsList.forEach((ele, i) => {
    let row = document.createElement("tr");
    row.id = `table-row-${i}`;
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerHTML = ele.show.name;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerHTML = ele.show.summary;
    row.appendChild(column2);

    let column3 = document.createElement("td");
   
    const date = new Date(ele.show.premiered).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "2-digit"});
    console.log("date:>>", date);
    column3.innerHTML = date;
    row.appendChild(column3);
  });
};


const createDropDown = (list) => {
  const dropdown = document.getElementById("showDropdown");
  const shows = list.map(e => e.show.name);
  // console.log('shows :>> ', shows);
  const unique = [...new Set(shows)];
  // console.log('unique :>> ', unique);
  unique.forEach(show => {
    let option = document.createElement("option");
    option.innerHTML = show;
    option.value = show;
    dropdown.appendChild(option);
  });
};


//5 add event listeners
// const setEventListeners = (shows) => {
//   document.querySelector("#date")
//       .addEventListener("change", (event) => {
//           filterByDate(shows)

//       });
//   document.querySelector("#showDropdown")
//       .addEventListener("change", (event) => {
//           filterByDropDown(shows)

//       });
// };

//7 fiter by dropdown
const filterByDropDown = (shows) => {
  const dropDownValue = document.querySelector("#showDropdown").value
  console.log('dropDownValue :>> ', dropDownValue);
  const filteredshows = games.filter(show => {
      return show.shows.name === dropDownValue || dropDownValue === "select type"
  })

  createHtmlTable(filteredGames)
}