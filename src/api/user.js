import request from 'request'

export function signup(name, email, password){
  if(!name){
    throw "Você precisa de um nome para se cadastrar"
  }
  if(!email){
    throw "Você precisa de um e-mail para se cadastrar"
  }
  if(!password){
    throw "Você precisa de uma senha para se cadastrar"
  }

  return request.post('http://localhost:3000/user', { name, password, email })
}
