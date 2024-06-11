document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("selectedText", (result) => {
    let { selectedText } = result
    console.log(selectedText)
    loadImage(selectedText)
  })
})

//function to check if the image file of corresponding name exist
const loadImage = (imageName) => {
  let defaultImagePath = "./labels/default.jpg"

  // Try to load the .png version of the image
  fetch(`./labels/${imageName}.png`)
    .then((response) =>
      response.ok ? `./labels/${imageName}.png` : Promise.reject()
    )
    .catch(() =>
      fetch(`./labels/${imageName}.jpg`).then((response) =>
        response.ok ? `./labels/${imageName}.jpg` : defaultImagePath
      )
    )
    .then((imagePath) => {
      let img = document.getElementById("img")
      img.src = chrome.runtime.getURL(imagePath)
      // document.getElementById("mensagem").style.display =
      //   img.src === "./image/default.jpg" ? "none" : "none"
    })
}
