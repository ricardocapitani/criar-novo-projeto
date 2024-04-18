function toggleMode() {
  const html = document.querySelector("html")
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  console.log('qualquer coisa')

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "qualquer coiso")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","qualquer coisa")
  }
}
