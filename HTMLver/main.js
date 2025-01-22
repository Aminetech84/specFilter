//import { specs } from "./list.js";
//const list1 = require('list');

// Get references to DOM elements
/*let addToDoButton = document.getElementById("addToDo");*/
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("search");
let dataTable = document.getElementById("mytable");
let dataError = document.getElementById("error");

// Function to store specialties on the server
async function storeSpecialty(
  specialtyNumber,
  specialtyCode,
  specialtyName,
  specialtyQualification,
  specialtyDuration,
  specialtyConditions
) {
  let specialtyData = {
    number: specialtyNumber,
    code: specialtyCode,
    name: specialtyName,
    qualification: specialtyQualification,
    duration: specialtyDuration,
    conditions: specialtyConditions,
  };

  try {
    const response = await fetch(
      "https://specfilter.onrender.com/api/specialties",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(
          specialtyNumber,
          specialtyCode,
          specialtyName,
          specialtyQualification,
          specialtyDuration,
          specialtyConditions
        ),
      }
    );

    if (response.ok) {
      // Task stored successfully
      displaySpecialties(await retrieveSpecialties());
    } else {
      console.error("Error storing task", response.statusText);
    }
  } catch (err) {
    console.error("Network error", err);
  }
}

// Function to retrieve specialties from the server
async function retrieveSpecialties() {
  try {
    const response = await fetch("https://specfilter.onrender.com/api/specialties");
    
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
}
const storedSpecialties = await retrieveSpecialties();

// Function to filter specialties
function filterSpecialties (specialties, searchTerm) {
  const searchTermLowercase = searchTerm.toLowerCase();
  return specialties.filter((specialty) => {
    const specialtyValues = [
      specialty.number.toString(),
      specialty.code.toLowerCase(),
      specialty.name.toLowerCase(),
      specialty.qualification.toString(),
      specialty.duration.toString(),
      specialty.conditions.toLowerCase(),
    ];
    return specialtyValues.some(value => value.includes(searchTermLowercase));
  });
}

// Function to display retrieved tasks
function displaySpecialties(specialties) {
  dataTable.innerHTML = ""; //Clear existing tasks before displaying new ones.
  dataTable.innerHTML = `
 <tr>
     <td>الرقم</td>
     <td>رمز التخصص</td>
     <td>اسم التخصص</td>
     <td>مستوى دراسي</td>
     <td>مدة التكوين</td>
     <td>شروط الالتحاق</td>
 </tr>
`;

  // For checking array is empty
  if (specialties.length === 0) {
    dataError.innerHTML = `لا يوجد تخصصات تطابق بحثك!  `;
  } else {
    dataError.innerHTML = "";
    for (let i = 0; i < specialties.length; i++) {
      dataTable.innerHTML += `
 <tr>
 <td>${specialties[i].number}</td>
     <td>${specialties[i].code}</td>
     <td>${specialties[i].name}</td>
     <td>${specialties[i].qualification}</td>
     <td>${specialties[i].duration}</td>
     <td>${specialties[i].conditions}</td>
 </tr>
`;
    }
  }

}

//console.log(storedSpecialties);


//for searching method
inputField.addEventListener("input", function () {
  const searchTerm = this.value;
  //console.log(specialties);
const filteredSpecialties = filterSpecialties(storedSpecialties, searchTerm);
displaySpecialties(filteredSpecialties);

});

// Load tasks from local storage on page load
window.onload = async () => {
 // const storedSpecialties = await retrieveSpecialties();
  displaySpecialties(storedSpecialties); // Display retrieved tasks
};

/********************************** */
//console.log(tasks);
/*specialties.forEach(specialty => {
   const paragraph = document.createElement("p");
   paragraph.innerText = specialty.name;
   paragraph.classList.add("paragraph-styling");
   paragraph.style.textDecoration = specialty.completed ? "line-through" : "";
   paragraph.dataset.taskId = specialty._id;
   toDoContainer.appendChild(paragraph);
   
 });*/

//for searching method
/*
  document.getElementById("search").addEventListener("keyup", function () {
    let search = this.value.toLowerCase();
    //console.log(search);
    newArray = specs.filter(function (val) {
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





/************************************* */

/*


/*
// Function to add a new task
function addNewTask() {
  // ***Storing input value
  let taskText = inputField.value.trim(); //Trim leading/trailing whitespace
  if (taskText) {
    storeTask(taskText); // Store task in local storage
    inputField.value = "";
  } else {
    alert("Please enter a task!"); // Handle empty input
  }
}*/
/*
// Function to mark a task as complete/incomplete
async function toggleTaskCompletion(taskElement) {
  const id = taskElement.dataset.taskId;
  const currentCompleted = taskElement.style.textDecoration === "line-through"
const newCompleted = !currentCompleted
  //const task = await retrieveTaskById(id); // Fetch the latest task data
 // console.log(task);

  //task.completed = !task.completed;
  
  try {
    const response = await fetch(`https://todoapp123-48ha.onrender.com/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ completed: newCompleted }),
    });
    
    if (response.ok) {
      const updatedTask = await response.json();
      taskElement.style.textDecoration = updatedTask.completed
      ? "line-through"
      : "";
    } else {
      console.error("Error updating task", response.statusText);
    }
  } catch (err) {
    console.error("Network error", err);
  }
}

// Function to retrieve a single task by ID
async function retrieveTaskById(id) {
  
  try {
    const response = await fetch(`https://todoapp123-48ha.onrender.com/api/tasks/${id}`);
//console.log(id);
    if (response.ok) {
      const task = await response.json();
      return task;
    } else {
      console.error("Error retrieving task:", response.statusText);
      return null
    }
  } catch (err) {
    console.error("Network error", err);
    return null;
  }
}

// Function to remove a task
async function removeTask(taskElement) {
  const id = taskElement.dataset.taskId;
  
  try {
    const response = await fetch(`https://todoapp123-48ha.onrender.com/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toDoContainer.removeChild(taskElement);
    } else {
      console.error("Error deleting task", response.statusText);
    }
  } catch (err) {
    console.error("Network error", err);
  }
}

// Event listener for adding tasks
addToDoButton.addEventListener('click', () => {
  const taskText = inputField.value.trim();
  if (taskText) {
    storeTask(taskText);
    inputField.value = '';
  } else {
    alert('Please enter a task!');
  }
});



//Event listener for task completion (click)
toDoContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    toggleTaskCompletion(event.target);
  }
  console.log(event.target);
});

// //Event listener for task removal (double-click)
toDoContainer.addEventListener("dblclick", (event) => {
  if (event.target.tagName === "P") {
    removeTask(event.target);
  }
});



*/
