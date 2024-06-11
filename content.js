function exibirMensagem(event, palavraChave) {
  var mensagens = {
    adidas: "Image Aavailible in database",
    nike: "Image Aavailible in database",
  }

  var mensagem = mensagens[palavraChave.toLowerCase()]

  if (mensagem) {
    var mensagemElement = document.createElement("div")
    var mensagemParts = mensagem.split("'")

    mensagemElement.style.opacity = "0.9"
    mensagemElement.style.position = "absolute"
    mensagemElement.style.backgroundColor = "yellow"
    mensagemElement.style.padding = "5px"
    mensagemElement.style.zIndex = "9999"
    mensagemElement.style.fontWeight = "bold"
    mensagemElement.style.left = event.pageX + 10 + "px"
    mensagemElement.style.top =
      event.pageY - mensagemElement.offsetHeight - 40 + "px"

    for (var i = 0; i < mensagemParts.length; i++) {
      var part = document.createElement("span")
      part.textContent = mensagemParts[i]
      if (i % 2 !== 0) {
        part.style.color = "red"
        part.style.fontWeight = "bold"
      }
      mensagemElement.appendChild(part)
    }

    document.body.appendChild(mensagemElement)

    document.addEventListener("mousedown", function () {
      if (mensagemElement.parentNode) {
        mensagemElement.parentNode.removeChild(mensagemElement)
      }
    })
  }
}

document.addEventListener("mouseup", function (event) {
  var palavrasEspecificas = [
    /////////////////////////////// A //////////////////////////////////////////////

    "adidas",
    "nike",
  ]

  var selectedText = window
    .getSelection()
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ +/g, "")

  for (var i = 0; i < palavrasEspecificas.length; i++) {
    var palavra = palavrasEspecificas[i]
    if (selectedText === palavra) {
      exibirMensagem(event, palavra)
      break
    }
  }
  //<-----------seu código terminou aqui-------->

  //<-----------meu código-------->
  chrome.runtime.sendMessage({ selectedText })
})
