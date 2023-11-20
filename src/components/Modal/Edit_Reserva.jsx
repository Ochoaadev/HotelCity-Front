import { Modal, Button, ModalHeader, ModalBody, ModalFooter  } from "./Modal";
import { useItemsContext } from "../../contexts/UpProvider";
import { useEffect, useState } from "react";

function Edit_Reserva() {
  const {
    openEdit_reserva,   
    handleOpenEdit_reserva,
    reservaIdToEdit
 } = useItemsContext();
   const { setMessage, setStatus, handleOpenMessage } = useItemsContext();
  

  const focusOnFirstEmptyInput = () => {
  
   return false;
 };
 const Editar = async (e) => {
  e.preventDefault(); // Evita que la página se recargue
  const status = document.getElementById('status').value;
  console.log(status);
  console.log(reservaIdToEdit);
  console.log("test");
};

  
   return (
      <>
      <>
        {/* Modal */}
        <Modal open={openEdit_reserva} handleOpen={handleOpenEdit_reserva}>
          {/* Cabecera del modal */}
          <ModalHeader>Editar un Artículo</ModalHeader>
          {/* Cuerpo del Modal */}
          <ModalBody>
            <form
              className="flex-col flex px-4 justify-center items-center"
              onSubmit={async (e) => {
                Editar(e);
              }}
              id="form_edit"
              encType="multipart/form-data"
            >
             <div className="mb-4 w-full">
               <label htmlFor="status">Estado:</label>
               <select id="status" name="status">
                 <option value="Aprobado">Aprobado</option>
                 <option value="Rechazado">Rechazado</option>
               </select>
              </div>
           
              
              
            </form>
          </ModalBody>
          {/* Footer del Nodal */}
          <ModalFooter>
            <Button open={openEdit_reserva}  handleOpen={handleOpenEdit_reserva}>Cancelar</Button>
            <button
              className="flex items-center text-center bg-dark-tangerine dark:bg-gray/50 dark:hover:text-dark-tangerine dark:hover:bg-gray dark:border-woodsmoke justify-center h-10 px-4 mx-2 rounded-lg hover:bg-pizazz focus:bg-blaze-orange dark:focus:bg-woodsmoke border-b-4 border-blaze-orange ssm:w-20 ssm:h-8 ssm:px-0 ssm:my-1 text-white font-bold"
              onClick={(e) => {
                Editar(e);
              }}
            >
              Guardar
            </button>
          </ModalFooter>
        </Modal>
      </>
    </>
  );
}
export default Edit_Reserva;
