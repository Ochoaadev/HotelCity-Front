import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Message from "../components/Modal/Message";

export default function Listar_Reservas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/ListarReservas')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const table_head = [
    "ID",
    "Cédula",
    "Nombre",
    "Email",
    "Móvil",
    "Teléfono",
    "PrimeraN",
    "UltimaN",
    "CargaF",
    "Comentario",
    "Estado",
    "Acción",
  ];


  return (
    <>
    <Header />
      <div className="mt-6 ml-2 mr-4 mb-8">
        {data.length != 0 ? (
          <div className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {table_head.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <span className="font-normal leading-none opacity-70">
                        {head}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user._id}>
                    <td className="">
                      <span className="font-normal">{user.id}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.Cedula}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.Name}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.Email}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.Movil}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.Telefono}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.PrimeraN}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.UltimaN}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.CargaF}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.Comment}</span>
                    </td>
                    <td className="">
                      <span className="font-normal">{user.Status}</span>
                    </td>
                    <td className="flex gap-4">
                      <button
                       
                      >
                        Editar
                      </button>

                      <button
                       
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1>No hay reservas</h1>
        )}
      </div>
      <Footer />
    </>
  );
}
