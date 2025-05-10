import { useState } from "react";

const jugadoresSimulados = [
  "Pérez", "Gómez", "Díaz", "Fernández", "Sosa", "López", "Martínez", "Ramírez",
  "Castro", "Torres", "Molina", "Rojas", "Navarro", "Leiva", "Ortega", // 1-15
  "Silva", "Vega", "Ibarra", "Moreno", "Paz", "Aguilar", "Bravo", "Acosta" // 16-23
];

const partidosSimulados = [
  { id: 1, rival: "Atlético", fecha: "19/05", lugar: "Local" },
  { id: 2, rival: "San Martín RC", fecha: "26/05", lugar: "Visitante" }
];

const ProgramarPartidoPage = () => {
  const [equipoAsignado, setEquipoAsignado] = useState({});
  const [partidoSeleccionado, setPartidoSeleccionado] = useState(null);

  const handleAsignar = (e, posicion) => {
    const jugador = e.target.value;
    setEquipoAsignado((prev) => ({
      ...prev,
      [posicion]: jugador,
    }));
  };

  const handleGuardar = () => {
    const titulares = Object.keys(equipoAsignado)
      .filter((key) => Number(key) >= 1 && Number(key) <= 15);
    const suplentes = Object.keys(equipoAsignado)
      .filter((key) => Number(key) >= 16 && Number(key) <= 23);

    const jugadoresUsados = new Set(Object.values(equipoAsignado));
    const hayRepetidos = jugadoresUsados.size !== Object.values(equipoAsignado).length;

    if (titulares.length !== 15 || suplentes.length < 1 || suplentes.length > 8 || hayRepetidos) {
      alert("Verificá que haya 15 titulares, entre 1 y 8 suplentes, y sin jugadores repetidos.");
      return;
    }

    console.log("Equipo asignado para el partido", partidoSeleccionado.rival);
    console.table(equipoAsignado);
    alert("Equipo guardado (ver consola)");
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-6">Asignar Equipo a Partido</h1>

      {!partidoSeleccionado ? (
        <>
          <h2 className="text-white text-lg mb-4">Seleccioná un partido</h2>
          <ul className="space-y-4">
            {partidosSimulados.map((p) => (
              <li key={p.id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
                <div>
                  <p><strong>{p.rival}</strong> - {p.fecha} - {p.lugar}</p>
                </div>
                <button
                  onClick={() => setPartidoSeleccionado(p)}
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded text-white"
                >
                  Asignar equipo
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="text-white text-lg mb-4">
            Partido vs {partidoSeleccionado.rival} ({partidoSeleccionado.fecha})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="bg-gray-800 p-3 rounded">
                <label className="text-cyan-300 block mb-1">Titular #{i + 1}</label>
                <select
                  value={equipoAsignado[i + 1] || ""}
                  onChange={(e) => handleAsignar(e, i + 1)}
                  className="w-full bg-gray-700 text-white p-2 rounded"
                >
                  <option value="">Seleccionar jugador</option>
                  {jugadoresSimulados.map((j, idx) => (
                    <option key={idx} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-800 p-3 rounded">
                <label className="text-cyan-300 block mb-1">Suplente #{i + 16}</label>
                <select
                  value={equipoAsignado[i + 16] || ""}
                  onChange={(e) => handleAsignar(e, i + 16)}
                  className="w-full bg-gray-700 text-white p-2 rounded"
                >
                  <option value="">Seleccionar jugador</option>
                  {jugadoresSimulados.map((j, idx) => (
                    <option key={idx} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button onClick={handleGuardar} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white">
              Guardar equipo
            </button>
            <button
              onClick={() => {
                setPartidoSeleccionado(null);
                setEquipoAsignado({});
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

export default ProgramarPartidoPage;
