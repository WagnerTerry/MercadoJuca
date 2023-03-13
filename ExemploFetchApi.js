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
    let url = await (await fetch("https://swapi.dev/api/planets/3")).json()
    console.log("funcionou", url)
}
