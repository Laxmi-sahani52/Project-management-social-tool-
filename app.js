function createProject() {
  const name = document.getElementById("projectName").value;
  if (!name) return alert("Enter a project name");

  const projectList = document.getElementById("projectList");

  const projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.innerHTML = `<strong>${name}</strong><p>No tasks yet. Start adding!</p>`;

  projectList.appendChild(projectDiv);
  document.getElementById("projectName").value = "";
}
