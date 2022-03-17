async function load() {
  let res = await fetch("./includes/loadBoard.inc.php");
  if (res.ok) {
    let data = await res.json();
    console.log(data);
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
