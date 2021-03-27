function dogPhoto(){
    let url = `https://dog.ceo/api/breeds/image/random`;
    let buttons = document.getElementById("button");
    let body = document.getElementsByTagName("BODY")[0]
    let ul = document.getElementById("list")
    buttons.addEventListener("click", () =>{
        fetch(url)
        .then(response => {
            if (response.ok) {
            return response.json();
            }   else {
            throw response.statusText;
            }
        })
        .then((jsonData) => {
            console.log(jsonData)
            let list = document.createElement("li");
            let image = document.createElement("img");
            image.height = 150;
            image.width = 150;
            image.src = jsonData.message;
            ul.append(list);
            list.append(image)
        })
        .catch(function(error) {
        let errorMessage = document.createElement("p");
        errorMessage.innerText = `An ${error} has occurred`;
        body.appendChild(errorMessage);
        });

    });
    
};

dogPhoto()