const getUser = () => {
  const user = localStorage.getItem("session");

  if (user) {
    return JSON.parse(user).user
  }
  return null;
}

export default getUser;