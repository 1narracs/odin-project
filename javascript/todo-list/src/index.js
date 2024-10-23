import { Todo } from "./todo";
import { Project } from "./project";
import "./styles.css";
import defaulProjectsJson from "./defaultData.json";

const domController = (() => {
  const content = document.querySelector("#content");
  const addBtn = document.querySelector("#add-todo");
  const titleInput = document.querySelector("#title-input");
  const descInput = document.querySelector("#desc-input");
  const dueDateInput = document.querySelector("#due-date-input");
  const prioInput = document.querySelector("#prio");
  const notesInput = document.querySelector("#notes");
  const completeInput = document.querySelector("#complete");
  const projectInput = document.querySelector("#project-input");

  const saveToLocalStorage = (projectsArray) => {
    localStorage.setItem("projects", JSON.stringify(projectsArray));
  };

  const validateInputs = () => {
    return (
      titleInput.value !== "" &&
      descInput.value !== "" &&
      dueDateInput.value !== "" &&
      projectInput.value !== ""
    );
  };

  // Takes Projects + Todos in JSON format and turns them into functional objects
  const objectifyProjectsJson = (projectsJsonified) => {
    return projectsJsonified.map((el) => {
      const currProject = new Project(el.name);
      el.todos.map((td) => {
        const currTodo = new Todo(
          td.title,
          td.desc,
          td.dueDate,
          td.prio,
          td.notes,
          td.checked
        );
        currProject.addTodo(currTodo);
      });
      return currProject;
    });
  };

  const initialiseNewTodo = () => {
    // Create a new Todo object with the input fields...
    const newTodo = new Todo(
      titleInput.value,
      descInput.value,
      dueDateInput.value,
      prioInput.value,
      notesInput.value,
      completeInput.checked
    );

    // If the Project is not already created, create it and push to the projects array...
    if (!projects.some((el) => el.name === projectInput.value)) {
      const newProject = new Project(projectInput.value);
      projects.push(newProject);
    }

    // Then find the project in the array...
    const selectedProject = projects.find(
      (el) => el.name === projectInput.value
    );
    // And add the Todo to the project object
    selectedProject.addTodo(newTodo);

    // Update projects in localStorage
    saveToLocalStorage(projects);
  };

  const appendTodo = (todoToAppend, todoProject) => {
    const parentProjectDiv = document.querySelector(
      `#project-${todoToAppend.project}-todos`
    );
    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h2");
    const todoDesc = document.createElement("p");
    const todoDate = document.createElement("p");
    const todoPrio = document.createElement("p");
    const todoNotes = document.createElement("p");
    const todoUpdateBtn = document.createElement("button");
    const todoDeleteBtn = document.createElement("button");

    todoDiv.setAttribute(
      "style",
      `background-color: ${todoToAppend.checked ? "green" : "red"}`
    );

    todoTitle.innerText = todoToAppend.title;
    todoDesc.innerText = todoToAppend.desc;
    todoDate.innerText = todoToAppend.dueDate;
    todoPrio.innerText = todoToAppend.prio;
    todoNotes.innerText = todoToAppend.notes;
    todoUpdateBtn.innerText = todoToAppend.checked ? "uncomplete" : "complete";
    todoDeleteBtn.innerText = "delete.";

    todoUpdateBtn.addEventListener("click", () => {
      todoToAppend.checked = !todoToAppend.checked;
      todoDiv.setAttribute(
        "style",
        `background-color: ${todoToAppend.checked ? "green" : "red"}`
      );
      todoUpdateBtn.innerText = todoToAppend.checked
        ? "uncomplete"
        : "complete";
      saveToLocalStorage(projects);
    });

    todoDeleteBtn.addEventListener("click", (e) => {
      todoProject.delTodo(todoToAppend);
      e.target.parentNode.remove();
      saveToLocalStorage(projects);
    });

    parentProjectDiv.append(todoDiv);
    todoDiv.append(todoTitle);
    todoDiv.append(todoDesc);
    todoDiv.append(todoDate);
    todoDiv.append(todoPrio);
    todoDiv.append(todoNotes);
    todoDiv.append(todoUpdateBtn);
    todoDiv.append(todoDeleteBtn);
  };

  const appendProject = (project) => {
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", `project-${project.htmlName}`);
    projectDiv.setAttribute("class", "project-container");

    const projectHeaderDiv = document.createElement("div");
    projectHeaderDiv.setAttribute("class", "project-header");
    const projectTitle = document.createElement("h1");
    projectTitle.innerText = project.name;
    const projectExpandToggle = document.createElement("button");
    projectExpandToggle.innerText = "v";
    projectExpandToggle.addEventListener("click", (e) => {
      if (project.showTodos) {
        unmountTodos(project);
        project.toggleShow();
      } else {
        project.todos.map((td) => {
          appendTodo(td, project);
        });
        project.toggleShow();
      }
    });

    const projectTodoDiv = document.createElement("div");
    projectTodoDiv.setAttribute("id", `project-${project.htmlName}-todos`);

    content.append(projectDiv);
    projectDiv.append(projectHeaderDiv);
    projectHeaderDiv.append(projectTitle);
    projectHeaderDiv.append(projectExpandToggle);
    projectDiv.append(projectTodoDiv);
  };

  const renderContent = () => {
    //reset content div
    content.innerHTML = "";
    projects.map((proj) => appendProject(proj));
    projects.map((proj) => {
      proj.todos.map((td) => {
        appendTodo(td, proj);
      });
    });
    console.log(projects);
  };

  const unmountTodos = (projectToUnmount) => {
    const projectTodoDiv = document.querySelector(
      `#project-${projectToUnmount.htmlName}-todos`
    );
    projectTodoDiv.innerHTML = "";
  };

  // Local variable to store projects and their todos. Each todo should have a project.
  // Each pageload will look for projects in local storage and either load them in or load in default data..
  let projects = [];
  // If projects are stored in localStorage, parse them into a JSON object, map the JSON so they are usable Project objects
  // then push them into the Projects variable
  if (localStorage.getItem("projects")) {
    projects = objectifyProjectsJson(
      JSON.parse(localStorage.getItem("projects"))
    );
  } // If not found, map the default data into Project objects and save it.
  else {
    projects = objectifyProjectsJson(defaulProjectsJson);
    saveToLocalStorage(projects);
  }
  // Render saved/default todos on page load
  renderContent();

  // Add new todo
  addBtn.addEventListener("click", () => {
    if (validateInputs()) {
      initialiseNewTodo();
      renderContent();
    }
  });
})();
