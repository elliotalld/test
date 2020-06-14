import axios from 'axios'

export const login = user => {
    return axios
      .post('users/login', {
        name: user.name,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }