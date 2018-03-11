let JWT = null
let USER = null

function getUserFromJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    const { email, name, id } = JSON.parse(window.atob(base64));
    return { email, name, id }
};

function set(jwt){
  if(!jwt){
    throw "token inválido"
  }
  USER = getUserFromJwt(jwt)
  JWT = jwt
}

function reset(){
  JWT = null
  USER = null
}

function get(){
  return USER
}

function logged(){
  return JWT != null
}

const CURRENT_USER = {
  set,
  reset,
  logged,
  get,
}

export default CURRENT_USER
