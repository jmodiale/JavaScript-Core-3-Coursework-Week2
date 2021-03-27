function funnyProgrammer(){
    let url = `https://xkcd.now.sh/?comic=latest`;
    let body = document.getElementsByTagName("BODY")[0];
    let container = document.getElementById("container")
    fetch(url)
    .then(response => {
        if (response.ok) {
        return response.json();
      } else {
        throw response.statusText;
      }
    })
    .then((jsonData) =>{
        console.log(jsonData)
        let image = document.createElement("img");
        container.appendChild(image)
        image.src = jsonData.img
    })
    .catch(function(error) {
      let errorMessage = document.createElement("p");
      errorMessage.innerText = `An ${error} has occurred`;
      body.appendChild(errorMessage);
    });
}

funnyProgrammer()