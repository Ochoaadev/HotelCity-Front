import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register(){
   const [InputName, SetInputName ] = useState();
   const [InputLastName, SetInputLastName] = useState();
   const [InputEmail, SetInputEmail] = useState();
   const [InputUserName, SetInputUserName] = useState();
   const [InputPassword, SetInputPassword] = useState();
   const [InputGender, SetInputGender] = useState();

   const HandleInputName = (event) => {
      SetInputName(event.target.value);
      console.log(event.target.value);
   }
   const HandleInputLastName = (event) => {
      SetInputLastName(event.target.value);
   }
   const HandleInputEmail =(event) => {
      SetInputEmail(event.target.value);
   }
   const HandleInputUserName = (event) => {
      SetInputUserName(event.target.value);
   }
   const HandleInputPassword = (event) => {
      SetInputPassword(event.targe.value);
   }
   const HandleInputGender = (event) => {
      SetInputGender(event.target.value);
   }
      
   return(
      <>
      <Header/>
         <div className="w-9/12 m-auto mt-10 ">
         <div  className=" w-6/12 justify-center items-center m-auto mt-10">
            
            <form action="" className="bg-crema shadow-md rounded px-8 pt-6 pb-8 mb-4" >
               <div className="flex flex-col">
                  <input
                     className="py-2 rounded-lg border border-black w-full" 
                     type="text"
                     id="Name"
                     placeholder=" Ingrese el Nombre:"
                     value={InputName}
                     onChange={HandleInputName}
                  />
               </div>
               <div className="flex flex-col">
                  <input 
                     className="mt-2 py-2 rounded-lg border border-black w-full"
                     type="text" 
                     id="Lastname"
                     placeholder=" Ingrese Apellido:"
                     value={InputLastName}
                     onChange={HandleInputLastName}
                  />
               </div>
               <div className="flex flex-col">
                  <input
                     className="mt-2 py-2 rounded-lg border border-black w-full"
                     type="Email"
                     id="Email"
                     placeholder="Ingrese E-mail:"
                     value={InputEmail}
                     onChange={HandleInputEmail}
                  />
               </div>
               <div className="flex flex-col">
                  <input
                     className="mt-2 py-2 rounded-lg border border-black w-full"
                     type="text"
                     id="UserName"
                     placeholder="Ingrese Usuario:"
                     value={InputUserName}
                     onChange={HandleInputUserName}
                  />                  
               </div>
               <div className="flex flex-col">
                  <input 
                     className="mt-2 py-2 rounded-lg border border-black w-full"
                     type="password" 
                     id="Password"
                     placeholder="Ingrese Password:"
                     value={InputPassword}
                     onChange={HandleInputPassword}   
                  />
               </div>
               <div className="flex flex-col">
                  <input 
                     className="mt-2 py-2 rounded-lg border border-black w-full"
                     type="date"
                     id="Gender"
                     value={InputGender}
                     onChange={HandleInputGender}
                  />
               </div>
               <div className="flex justify-between">
   <button class="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
         Cancelar
      </span>
   </button>
   <button class="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
         Registrar
      </span>
   </button>
</div>
            </form>
         </div>   
         </div>
         <Footer/>
      </>
   )

}export default Register;