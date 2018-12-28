function askPassword(ok, fail) {
    let password = "asdasd";
    //console.log(this);
    let name = "this";
    if (password == "rockstar") ok();
    else fail();
}
let name = "this";
  
  let user = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));