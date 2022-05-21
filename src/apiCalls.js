const getFetch = (address) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${address}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.text)
      } else {
        return response.json()
      }
    })
    .catch(err => {
        console.log(err)
    })
}

export default getFetch;