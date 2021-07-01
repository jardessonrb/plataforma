type ParamsType = {
  email: string;
  password: string
}
const validationLogin = ({ email, password}: ParamsType) => {
  if(email == undefined || email == null || email.length < 6){
    return {status: "error", message: "Erro in field email"}
  }

  if(password == undefined || password == null || password.length < 6){
    return {status: "error", message: "Erro in field password"}
  }

  return {status: "success", message: "Validated fields"}
}


export { validationLogin };
