
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
      return  response.json()
        .then(json => {
          if (response.ok) {         //判断状态码 >= 200 and < 300
            return json              //返回body
          } else {
            return Promise.reject(json)     //返回错误信息
          }
        })
    })
}
