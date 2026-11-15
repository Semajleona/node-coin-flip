document.querySelector('#flip').addEventListener('click', makeReq)

function makeReq() {

  const myFlip = document.querySelector("#game").value

  fetch(`/api?choice=${myFlip}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.querySelector("h2").innerText = data.theFlip
      document.querySelector("h3").innerText = data.flipResult

    })


}

