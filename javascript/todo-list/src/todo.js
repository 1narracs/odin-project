export class Todo {
  constructor(title, desc, dueDate, prio, notes = "", checked = false) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.prio = prio;
    this.notes = notes;
    this.checked = checked;
    this.project = "";
  }

  updatedChecked() {
    this.checked = !this.checked;
  }

  addToProject(projectName) {
    this.project = projectName;
  }
}
