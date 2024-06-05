async function fetchData(url) {
    let result = await fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .catch(error => `${error.message}`)
    return result
}


async function fakeDelay(milliseconds) {
    return new Promise (resolve => setTimeout(resolve, milliseconds))
}

module.exports = {
    fetchData,
    fakeDelay
}