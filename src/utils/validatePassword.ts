const validatePassword = (password: string) => {
  if (!password) {
    return { error: true, helperText: "Campo senha é obrigatório" };
  } else if (password.length > 5) {
    return { error: false, helperText: null };
  } else {
    return { error: true, helperText: "A senha precisa ter 6 ou mais caracteres" };
  }
}

export default validatePassword;