const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { error: true, helperText: "Campo e-mail é obrigatório" };
  } else if (!emailRegex.test(email)) {
    return { error: true, helperText: "E-mail inválido" };
  } else {
    return { error: false, helperText: null };
  }
};

export default validateEmail;