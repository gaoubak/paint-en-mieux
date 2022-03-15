function divToJson() {
  let boardContent = document.getElementById("board").innerHTML;
  let projectname = document.getElementById("projectname").value;
  alert(`<?php echo "getBoardContent(${projectname},"${boardContent}");"; ?>`);
}
