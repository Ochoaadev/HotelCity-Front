import React, { useState, useEffect } from "react";
import Header from '../components/Header';
function Form_reservas (){
   const [InputCedula, SetInputCedula ] = useState();
   const [InputName, SetInputName ] = useState();
   const [InputMovil, SetInputMovil] = useState();
   const [InputEmail, SetInputEmail ] = useState();
   const [InputTelefono, SetInputTelefono] = useState();
   const [InputPrimeraN, SetInputPrimeraN ] = useState();
   const [InputUltimaN, SetInputUltimaN ] = useState();
   const [InputCargaF, SetInputCargaF] = useState();
   const [InputPregunta, SetInputPregunta ] = useState();
   
   const handleInputCedula = (event) => {
      SetInputCedula(event.target.value);
   }
   const handleInputName = (event) => {
      SetInputName(event.target.value);
   }
   const handleInputMovil = (event) => {
      SetInputMovil(event.target.value);
   }
   const handleInputEmail = (event) => {
      SetInputEmail(event.target.value);
   }
   const handleInputTelefono= (event) => {
      SetInputTelefono(event.target.value);
   }
   const handleInputPrimeraN= (event) => {
      SetInputPrimeraN(event.target.value);
   }
   const handleInputUltimaN = (event) => {
      SetInputUltimaN(event.target.value);
   }
   const handleInputCargaF = (event) => {
      SetInputCargaF(event.target.value);
   }
   const handleInputPregunta = (event) => {
      SetInputPregunta(event.target.value);
   }

   return(
      <>
         <Header />
         <div className="w-full max-w-5xl flex justify-center items-center m-auto mt-10">
            <form action="form_reservas" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <div className="flex flex-col ">
                  <label for="Cedula" className="mb-2">
                     Cedula
                     <input 
                        className="border border-black w-full"
                        type="text" 
                        id="Cedula"
                        value={InputCedula}
                        onChange={handleInputCedula}
                     />
                  </label>
               </div> 
               <div className="flex flex-col ">
                  <label for="name" className="mb-2">
                     Nombre Completo
                     <input 
                        className="border border-black w-full"
                        type="text" 
                        id="name"
                        value={InputName}
                        onChange={handleInputName}
                     />
                  </label>
               </div> 
               <div className="flex flex-col">
                  <label for="email" className="mb-4">
                     Email
                     <input 
                        className="border border-black w-96 ml-2"
                        type="email" 
                        id="email"
                        value={InputEmail}
                        onChange={handleInputEmail}
                     />
                  </label>
               </div>
               <div className="flex flex-col mb-4">
                  <label for="email" className="mb-2">
                     Movil
                     <input 
                        className="border border-black w-96 ml-2"
                        type="Movil" 
                        id="Movil"
                        value={InputMovil}
                        onChange={handleInputMovil}
                     />
                  </label>
               </div>
               <div className="flex flex-col">
                  <label for="telefono" className="mb-4">Telefono
                     <input 
                        className="border border-black w-96 ml-2"
                        type="telefono" 
                        id="telefono"
                        value={InputTelefono}
                        onChange={handleInputTelefono}
                     />
                  </label>
               </div>
               <div className="flex flex-col">            
                  <label for="PrimeraN" className="mb-4">Primera noche de Estancia?
                     <input 
                        className="border border-black w-96 ml-2"
                        type="date" 
                        id="PrimeraN"
                        value={InputPrimeraN}
                        onChange={handleInputPrimeraN}
                     />
                  </label>
               </div>
               <div className="flex flex-col">            
                  <label for="UltimaN" className="mb-4">Ultima noche de Estancia?
                     <input 
                        className="border border-black w-96 ml-2"
                        type="date" 
                        id="UltimaN"
                        value={InputUltimaN}
                        onChange={handleInputUltimaN}
                     />
                  </label>
               </div>
               <div className="flex flex-col"> 
                  <label for="CargaF" className="mb-4">Número de Adultos/Niños?
                     <input 
                        className="border border-black w-96 ml-2"
                        type="number" 
                        id="CargaF"
                        value={InputCargaF}
                        onChange={handleInputCargaF}
                     />
                  </label>
               </div>
               <div className="flex flex-col"> 
                  <label for="Pregunta">Por que nos elegiste?
                     <input 
                        type="text" 
                        id="Pregunta"
                        value={InputPregunta}
                        onChange={handleInputPregunta}
                     />
                  </label>
               </div>
            </form>
         </div>
      </>
   )
}

export default Form_reservas;
