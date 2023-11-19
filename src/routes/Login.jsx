import React, { useState,useEffect } from 'react';
import Message from "../components/Modal/Message";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useItemsContext, useUpItemsContext } from "../contexts/UpProvider";

const Login = () => {

    const { setMessage, setStatus, handleOpenMessage } = useItemsContext();

    //Actualización de estados de Sección
    const update = useUpItemsContext();
    const navigate = useNavigate();
    const { signin, isAuthenticated } = useAuth();
  
    //Comprobación de la existencia de un token
    useEffect(() => {
      const token = sessionStorage.getItem("token");
      if (token != "" && isAuthenticated) {
        navigate("/Home");
      }
    }, [isAuthenticated]);

  // Estableciendo los estados de los datos
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  
  // Inputs sin contenidos
  const focusOnFirstEmptyInput = () => {
 if (username == "") {
    document.getElementById("username").focus();
    setErrorMessage("Por favor, ingrese su nombre de usuario.");
    return true;
 }

 if (password == "") {
    document.getElementById("password").focus();
    setErrorMessage("Por favor, ingrese su contraseña.");
    return true;
 }

 setErrorMessage("");
 return false;
};

  //Función de Inicio de Sección
  const handleSubmit = async (e) => {
    // e.preventDefault();
   
    // const alert = await focusOnFirstEmptyInput();
    // if (alert === true) {
    //    return;
    // }
   
    // const data_login = {
    //    username,
    //    password,
    // };
   
    // //Solicitud al backend
    // const response = await fetch(import.meta.env.VITE_URL_LOGIN, {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data_login),
    //   });
  
    //   const data = await response.json();
    //         console.log(data.message);
    //         setMessage(data.message); // Actualiza el estado del mensaje
  
    //         console.log(data.status);
        e.preventDefault();
        const alert = await focusOnFirstEmptyInput();
        if (alert === true) {
          return;
        }
    
        const data_login = {
          username,
          password,
        };
    
        //Solicitud al backend
        const response = await signin(data_login);
    
        //Respuestas de la solicitud
        if (response.data.status != 200) {
          await setMessage(response.data.message);
          await setStatus(response.data.status);
          await handleOpenMessage();
        }
        navigate(response.ruta);

    }

 return (
    <>
    <Message />
    <Header/>
    <div className="w-full max-w-5xl flex justify-center items-center m-auto mt-20 mb-28">
      <div className="bg-crema shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center text-2xl mb-5">
            Iniciar Sesión            
        </h1>
        <form onSubmit={handleSubmit} className='bg-crema'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" 
              type="text" 
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" 
              type="password" 
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
          <button
              type="submit"
              onClick={(e) => {
                handleSubmit (e)
                update(true);
              }}
              className="px-2 flex items-center text-center bg-dark-tangerine dark:bg-gray/50 dark:hover:text-dark-tangerine dark:hover:bg-gray dark:border-woodsmoke justify-center h-10 rounded-lg hover:bg-pizazz focus:bg-blaze-orange dark:focus:bg-woodsmoke border-b-4 border-blaze-orange w-24 ssm:h-10 text-white font-bold"
            >
              Entrar
            </button>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/Registro">
                  Registrarse
            </Link>
          </div>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 flex items-center justify-center pt-8" href="#">
              Olvide mi Contraseña
            </a>
            {errorMessage && (
                <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
        </form>
      </div>
    </div>
    <Footer/>
    </>
 );
};

export default Login;