import { useState } from "react";

const AdminCrearEntrenamientoPage = () => {
  const [entrenamiento, setEntrenamiento] = useState({
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntrenamiento((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const equipos = ["Primera", "Intermedia", "PreIntermedia A", "PreIntermedia B"];
    const entrenamientosPorEquipo = equipos.map((equipo) => ({
      ...entrenamiento,
      equipo,
    }));

    console.log("Entrenamientos generados para todos los equipos:");
    console.table(entrenamientosPorEquipo);

    alert("Entrenamiento creado para los 4 equipos (ver consola)");

    setEntrenamiento({ fecha: "", hora: "" });
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-6">Crear Entrenamiento</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg bg-gray-800 p-6 rounded">

        <div>
          <label className="text-white block mb-1">Fecha</label>
          <input
            type="date"
            name="fecha"
            value={entrenamiento.fecha}
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
            value={entrenamiento.hora}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Crear entrenamiento
        </button>
      </form>
    </div>
  );
};

export default AdminCrearEntrenamientoPage;
