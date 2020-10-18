function submitData(name, email) {

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
                return response.json()
            })
            .then(json => {
                document.querySelector("body").innerHTML+= Object.entries(json)
            })

            .catch(function(error){
                document.querySelector("body").innerHTML+=`<p>${error.message}</p>`

            });
    }

    submitData("dcd","sdjhas") 