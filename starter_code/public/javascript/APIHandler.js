class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    // this.instance = axios.create({
    //   baseUrl: this.BASE_URL}
    // )

  }

  getFullList () {
    return axios.get(this.BASE_URL)
    .then( response => {
      return response.data
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + id)
    .then( response => {
      console.log('DATA',response.data);
      return response.data
    })
  }
  
  createOneRegister (characterInfo) {
    return axios.post(this.BASE_URL, characterInfo)
    .then(response =>{
      return response.data})

    .catch(error => console.log(error))

  }

  updateOneRegister (id, characterInfo) {
    return axios.patch(this.BASE_URL + id, characterInfo)
    .then( response => {
      console.log('DATA',response.data);
      return response.data
    })

    .catch(error => console.log(error))


  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + id)
    .then( response => {
      console.log('DATA',response.data);
      return response.data
    })

    .catch(error => console.log(error))


  }
}

