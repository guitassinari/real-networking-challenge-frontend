import request from 'request'

export function signup({ name, email, password }){
  return new Promise((resolve, reject) => {
    if(!name){
      throw "Você precisa de um nome para se cadastrar"
    }
    if(!email){
      throw "Você precisa de um e-mail para se cadastrar"
    }
    if(!password){
      throw "Você precisa de uma senha para se cadastrar"
    }
    const body = {
      user: {
        name,
        password_digest: password,
        email
      }
    }

    return request.post({url: 'http://localhost:3000/users', body, json: true }, (error, message, response) => {
      if(error){
        reject()
      }
      resolve()
    })
  })
}
