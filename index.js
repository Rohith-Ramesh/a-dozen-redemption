function main() {
  let body = document.querySelector('body')
  let paperImg = document.getElementById('paper-img')
  document.querySelector('html').style.setProperty('--bg', '#000')
  let content = body.innerHTML
  body.innerHTML = `
  <div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
  `
  loadImage(paperImg, './images/1-min.png').then((image) => {
    console.log('Loaded image')
    console.log(content)
    body.innerHTML = content
    let btn = document.getElementById('proceed-btn')
    btn.addEventListener('click', () => {
      window.location = './quest01/screen1/screen1.html'
    })
    document
      .querySelector('html')
      .style.setProperty('--bg', `url('./images/intro1-min.png')`)
  })
}
main()
function loadImage(img, src) {
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}
