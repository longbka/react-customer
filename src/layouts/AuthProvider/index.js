import React from 'react';
const authContext = React.createContext();

const AuthProvider = ({ children }) => {

  const login = ({username, password}) => {
    return new Promise((resolve, reject) => {
        login({ email: username, password: password })
          .then((value) => {
            console.log(value);
            localStorage.setItem('username', username);
            resolve(value);
          })
          .catch((err) => {
            console.log('err.... ', err.response.request.response);
            reject(err);
          });
      });
  }

  const logout = () => {
        localStorage.removeItem('username');
        return Promise.resolve();
  }

  const checkError = ({status}) => {
    if (status === 401 || status === 403) {
        localStorage.removeItem('username');
        return Promise.reject();
      }
      return Promise.resolve();
  }

  const checkAuth = () => {
    var username = localStorage.getItem('username');
    if (username != null) {
      return Promise.resolve(username);
    } else {
      return Promise.reject();
    }
  }

  const getPermissions = () => {

  }



  return (
    <authContext.Provider value={{ login, logout, checkError, checkAuth, getPermissions }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;