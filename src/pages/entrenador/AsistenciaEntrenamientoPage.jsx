import { useState } from "react";

const entrenamientosSimulados = [
  { id: 1, fecha: "15/05", hora: "20:00", equipo: "Primera" },
  { id: 2, fecha: "17/05", hora: "20:00", equipo: "Intermedia" },
];

const jugadoresPorEquipo = {
  Primera: ["Pérez", "Gómez", "Díaz", "Fernández", "Sosa", "López", "Martínez"],
  Intermedia: ["Suárez", "Correa", "Vargas", "Reyes", "Benítez", "Campos"],
};

const AsistenciaEntrenamientoPage = () => {
  const [entrenamientoSeleccionado, setEntrenamientoSeleccionado] = useState(null);
  const [asistencia, setAsistencia] = useState({});

  const handleCheck = (jugador) => {
    setAsistencia((prev) => ({
      ...prev,
      [jugador]: !prev[jugador],
    }));
  };

  const handleGuardar = () => {
    const resultado = Object.entries(asistencia).map(([jugador, presente]) => ({
      jugador,
      estado: presente ? "Presente" : "Ausente",
    }));
    console.table(resultado);
    alert("Asistencia registrada (ver consola)");
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-6">Asistencia a Entrenamientos</h1>

      {!entrenamientoSeleccionado ? (
        <>
          <h2 className="text-white text-lg mb-4">Seleccioná un entrenamiento</h2>
          <ul className="space-y-4">
            {entrenamientosSimulados.map((e) => (
              <li key={e.id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
                <p>{e.fecha} - {e.hora} ({e.equipo})</p>
                <button
                  onClick={() => {
                    setEntrenamientoSeleccionado(e);
                    setAsistencia(
                      jugadoresPorEquipo[e.equipo].reduce((acc, j) => ({ ...acc, [j]: false }), {})
                    );
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded text-white"
                >
                  Tomar asistencia
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="text-white text-lg mb-4">
            Asistencia - {entrenamientoSeleccionado.fecha} ({entrenamientoSeleccionado.equipo})
          </h2>

          <ul className="space-y-2 mb-6">
            {Object.keys(asistencia).map((jugador) => (
              <li key={jugador} className="bg-gray-800 p-3 rounded flex justify-between items-center">
                <span>{jugador}</span>
                <input
                  type="checkbox"
                  checked={asistencia[jugador]}
                  onChange={() => handleCheck(jugador)}
                />
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button
              onClick={handleGuardar}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
            >
              Guardar asistencia
            </button>
            <button
              onClick={() => {
                setEntrenamientoSeleccionado(null);
                setAsistencia({});
              }}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
            >
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AsistenciaEntrenamientoPage;
