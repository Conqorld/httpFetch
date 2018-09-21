# httpFetch
fetch的简易封装
使用方法
httpFetch('./example',{
  data:{id: id}
})
  .then(res => {})  //成功回调
  .catch(err => {})   //失败回调
