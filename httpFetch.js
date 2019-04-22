
export default function(url) {
  let {data = null, methed = 'post'} = arguments.length > 1 ? arguments[1] : {} //判断传参
  let fetchParams = {
    method: methed,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include' // 将凭证也带上（例如cookies）
  }
  if (data) {
    fetchParams.body = JSON.stringify(data)
  }
  return fetch(url, fetchParams)
    .then(response => {
      if(response.status === 200){
        return  response.json()
      }else {
        return Promise.reject('xx错误')
      }
    })
}
