import api from './api'
const ROUTE = 'users'

export function signup({ name, email, password }){
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
      password,
      password_confirmation: password,
      email
    }
  }

  return api.post(ROUTE, body)
}


export function signin({ email, password }){
  if(!email){
    throw "Você precisa de um email para logar!"
  }

  if(!password){
    throw "Você precisa de uma senha para logar!"
  }

  return api.post('user_token', { auth: { email, password } }).then(({jwt}) => jwt)
}

export function update({ name, password }){
  return api.put(ROUTE, { user: { name, password } })
}

export function destroy(id){
  return api.del(`${ROUTE}/${id}`)
}
