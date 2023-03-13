// exemplo de request usando fetch api

function chamarApi() {
    console.log("chamando api")
    let url = "https://swapi.dev/api/planets/3"

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => console.log("data", data))
}

// exemplo usando async / await - fecth api
async function requestApi() {
    let url = await fetch("https://swapi.dev/api/planets/3")
    let data = await url.json()
    console.log("funcionou", data)
}
