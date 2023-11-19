import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');


 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
 };

 return (
    <>
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
              onChange={(e) => setUsername(e.target.value)}
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-10" type="submit">
              Iniciar Sesión
            </button>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/Registro">
                  Registrarse
            </Link>
          </div>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 flex items-center justify-center pt-8" href="#">
              Olvide mi Contraseña
            </a>
        </form>
      </div>
    </div>
    <Footer/>
    </>
 );
};

export default Login;