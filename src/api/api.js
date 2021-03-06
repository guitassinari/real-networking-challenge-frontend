import request from 'request'

const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:3000/'

export function post(route, body){
  return new Promise((resolve, reject) => {
    request.post({ url: `${API_HOST}${route}`, body, json: true}, (error, m, response) => {
      if(error || m.statusCode >= 400){
        reject(error)
        return
      }
      resolve(response)
    })
  })
}

export function get(route){
  return new Promise((resolve, reject) => {
    request.get({ url: `${API_HOST}${route}`, json: true}, (error, m, response) => {
      if(error || m.statusCode >= 400){
        reject(error)
        return
      }
      resolve(response)
    })
  })
}

export function put(route, body){
  return new Promise((resolve, reject) => {
    request.put({ url: `${API_HOST}${route}`, body, json: true}, (error, m, response) => {
      if(error || m.statusCode >= 400){
        reject(error)
        return
      }
      resolve(response)
    })
  })
}

export function del(route){
  return new Promise((resolve, reject) => {
    request.delete({ url: `${API_HOST}${route}`, json: true}, (error, m, response) => {
      if(error || m.statusCode >= 400){
        reject(error)
        return
      }
      resolve(response)
    })
  })
}

const API = {
  get,
  post,
  put,
  del,
}

export default  API
