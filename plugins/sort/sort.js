export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.sort = (arr) => arr.sort(); // context注入
  inject('$sortUp',arr => arr.sort((a,b) => {
    return (a - b);
  })) // 同时注入
}
















