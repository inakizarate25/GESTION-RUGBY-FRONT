import { useState } from "react";

const pagosSimulados = [
  {
    id: 1,
    partido: "vs Atlético",
    fecha: "19/05",
    monto: 2500,
    estado: "Pendiente", // Revisando, Aceptado, Rechazado
    comprobante: null,
  },
  {
    id: 2,
    partido: "vs San Martín",
    fecha: "26/05",
    monto: 2500,
    estado: "Revisando",
    comprobante: "comprobante2.pdf",
  },
];

const MyPaymentsPage = () => {
  const [pagos, setPagos] = useState(pagosSimulados);

  const handleUpload = (id, file) => {
    const nuevosPagos = pagos.map((p) =>
      p.id === id ? { ...p, comprobante: file.name, estado: "Revisando" } : p
    );
    setPagos(nuevosPagos);
    console.log("Comprobante enviado:", file.name, "(ver consola)");
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-6">Pagos de Comidas Post Partido</h1>

      <ul className="space-y-4">
        {pagos.map((pago) => (
          <li key={pago.id} className="bg-gray-800 p-4 rounded space-y-2">
            <p><strong>Partido:</strong> {pago.partido} ({pago.fecha})</p>
            <p><strong>Monto:</strong> ${pago.monto}</p>
            <p><strong>Estado:</strong> <span className={
              pago.estado === "Aceptado" ? "text-green-400" :
              pago.estado === "Rechazado" ? "text-red-400" :
              "text-yellow-400"
            }>{pago.estado}</span></p>

            {pago.comprobante && (
              <p className="text-sm text-gray-400">Comprobante: {pago.comprobante}</p>
            )}

            {pago.estado === "Pendiente" && (
              <div>
                <label className="block mb-1 text-sm">Subir comprobante:</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleUpload(pago.id, e.target.files[0])}
                  className="bg-gray-700 p-2 rounded text-white text-sm"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPaymentsPage;
