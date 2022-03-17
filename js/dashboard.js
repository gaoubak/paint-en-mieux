function load(projectId) {
  fetch("./includes/loadBoard.inc.php", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((text) => console.log(text));
}
