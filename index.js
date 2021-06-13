function main() {
  let btn = document.getElementById("proceed-btn");
  console.log(btn);
  btn.addEventListener("click", () => {
    window.location = "./level1/level1.html";
  });
}
main();
