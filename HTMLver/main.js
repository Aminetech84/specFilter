//import { specs } from "./list.js";
//const list1 = require('list');

async function retrieveSpecialties() {
  try {
    const response = await fetch("http://localhost:5000/api/specialties");

    if (response.ok) {
      const specialties = await response.json();
      console.log(specialties);
      return specialties;
    } else {
      console.error("Error retrieving specialties", response.statusText);
      return {};
    }
  } catch (err) {
    console.error("Network error", err);
    return {};
  }
  console.log('1');
  
}

retrieveSpecialties()
//alert('Hello')

// Show table data

function showable(curarray) {
  document.getElementById("mytable").innerHTML = `
        <tr>
            <td>الرمز</td>
            <td>اسم التخصص</td>
            <td>مدة التكوين</td>
            <td>شروط الالتحاق</td>
        </tr>
    `;

  // For checking array is empty
  if (curarray == "") {
    document.getElementById("error").innerHTML = `NOT FOUND!`;
  } else {
    document.getElementById("error").innerHTML = "";
    for (let i = 0; i < curarray.length; i++) {
      document.getElementById("mytable").innerHTML += `
        <tr>
            <td>${curarray[i].code}</td>
            <td>${curarray[i].name}</td>
            <td>${curarray[i].duration}</td>
            <td>${curarray[i].condition}</td>
        </tr>
    `;
    }
  }
}

//showable(specs);

// take filtered data

let newarray = [];

//for searching method

document.getElementById("search").addEventListener("keyup", function () {
  let search = this.value.toLowerCase();
  //console.log(search);
  newarray = specs.filter(function (val) {
    console.log(val);
    if (
      val.code.includes(search) ||
      val.name.includes(search) ||
      val.condition.includes(search) ||
      val.duration.includes(search)
    ) {
      const newobj = {
        code: val.code,
        name: val.name,
        duration: val.duration,
        condition: val.condition,
      };
      return newobj;
    }
  });
  showable(newarray);
});
