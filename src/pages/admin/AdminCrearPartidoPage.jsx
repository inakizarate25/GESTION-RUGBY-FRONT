import { useState } from "react";

const AdminCrearPartidoPage = () => {
  const [partido, setPartido] = useState({
    fecha: "",
    hora: "",
    rival: "",
    lugar: "Local",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartido((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const equipos = ["Primera", "Intermedia", "PreIntermedia A", "PreIntermedia B"];
    const partidosPorEquipo = equipos.map((equipo) => ({
      ...partido,
      equipo,
    }));

    console.log("Partidos generados para todos los equipos:");
    console.table(partidosPorEquipo);

    alert("Partido creado para los 4 equipos (ver consola)");

    setPartido({
      fecha: "",
      hora: "",
      rival: "",
      lugar: "Local",
    });
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-6">Crear Partido</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg bg-gray-800 p-6 rounded">

        <div>
          <label className="text-white block mb-1">Fecha</label>
          <input
            type="date"
            name="fecha"
            value={partido.fecha}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div>
          <label className="text-white block mb-1">Hora</label>
          <input
            type="time"
            name="hora"
            value={partido.hora}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div>
          <label className="text-white block mb-1">Rival</label>
          <input
            type="text"
            name="rival"
            value={partido.rival}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div>
          <label className="text-white block mb-1">Lugar</label>
          <select
            name="lugar"
            value={partido.lugar}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          >
            <option>Local</option>
            <option>Visitante</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Crear partido
        </button>
      </form>
    </div>
  );
};

export default AdminCrearPartidoPage;
