function divToJson() {
  let boardContent = document.getElementById("board").innerHTML;
  let projectname = document.getElementById("projectname").value;
  window.location.href = `whiteboard.php${boardContent}`;
  document.write(`<?php getBoardContent(${projectname}); ?>`);
}
