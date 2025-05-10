import { useState } from "react";

const pagosPendientes = [
  {
    id: 1,
    jugador: "Juan Pérez",
    partido: "vs Atlético",
    fecha: "19/05",
    monto: 2500,
    comprobante: "https://via.placeholder.com/400x300.png?text=Comprobante+1",
    estado: "Revisando",
  },
  {
    id: 2,
    jugador: "Ana Gómez",
    partido: "vs San Martín",
    fecha: "26/05",
    monto: 2500,
    comprobante: "https://via.placeholder.com/400x300.png?text=Comprobante+2",
    estado: "Revisando",
  },
];

const AdminPagosPage = () => {
  const [pagos, setPagos] = useState(pagosPendientes);
  const [visor, setVisor] = useState(null); // { jugador, comprobante }

  const actualizarEstado = (id, nuevoEstado) => {
    const actualizados = pagos.map((p) =>
      p.id === id ? { ...p, estado: nuevoEstado } : p
    );
    setPagos(actualizados);
    console.log(`Pago ${id} → ${nuevoEstado}`);
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-6">Revisión de Pagos</h1>

      <ul className="space-y-4">
        {pagos.map((pago) => (
          <li key={pago.id} className="bg-gray-800 p-4 rounded space-y-2">
            <p><strong>Jugador:</strong> {pago.jugador}</p>
            <p><strong>Partido:</strong> {pago.partido} ({pago.fecha})</p>
            <p><strong>Monto:</strong> ${pago.monto}</p>
            <p><strong>Estado actual:</strong> <span className="text-yellow-400">{pago.estado}</span></p>

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setVisor({ jugador: pago.jugador, comprobante: pago.comprobante })}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white"
              >
                Ver comprobante
              </button>
              <a
                href={pago.comprobante}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded text-white"
              >
                Descargar
              </a>
              <button
                onClick={() => actualizarEstado(pago.id, "Aceptado")}
                className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-white"
              >
                Aceptar
              </button>
              <button
                onClick={() => actualizarEstado(pago.id, "Rechazado")}
                className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white"
              >
                Rechazar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Visor de comprobante */}
      {visor && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-4 rounded shadow-lg max-w-3xl w-full">
            <h2 className="text-cyan-400 text-xl mb-4">Comprobante de {visor.jugador}</h2>
            <div className="bg-white p-2 rounded">
              <img
                src={visor.comprobante}
                alt="comprobante"
                className="w-full max-h-[500px] object-contain mx-auto"
              />
            </div>
            <div className="text-right mt-4">
              <button
                onClick={() => setVisor(null)}
                className="text-white bg-red-600 px-4 py-1 rounded"
              >
                Cerrar visor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPagosPage;
