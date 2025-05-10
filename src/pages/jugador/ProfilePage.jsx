import { useState } from "react";
const posiciones = [
  "Pilar", "Hooker", "Segunda línea", "Ala", "Octavo",
  "Medio Scrum", "Apertura", "Centro", "Wing", "FullBack"
];

const datosSimulados = {
  nombre: "Juan Pérez",
  email: "juan@club.com",
  telefono: "11-1234-5678",
  direccion: "Av. Siempre Viva 123",
  dni: "12345678",
  posicion: "Ala"
};

const ProfilePage = () => {
  const [formData, setFormData] = useState(datosSimulados);
  const [editando, setEditando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuardar = () => {
    console.log("Datos actualizados:", formData);
    setEditando(false);
    alert("Perfil actualizado (ver consola)");
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-6">Mi Perfil</h1>

      <div className="bg-gray-800 p-6 rounded space-y-4 max-w-xl">
        <div>
          <label className="text-white block">Nombre</label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            disabled={!editando}
            className="bg-gray-700 p-2 rounded w-full text-white"
          />
        </div>

        <div>
          <label className="text-white block">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!editando}
            className="bg-gray-700 p-2 rounded w-full text-white"
          />
        </div>

        <div>
          <label className="text-white block">Teléfono</label>
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            disabled={!editando}
            className="bg-gray-700 p-2 rounded w-full text-white"
          />
        </div>

        <div>
          <label className="text-white block">Dirección</label>
          <input
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            disabled={!editando}
            className="bg-gray-700 p-2 rounded w-full text-white"
          />
        </div>

        <div>
          <label className="text-white block">DNI</label>
          <input
            name="dni"
            value={formData.dni}
            disabled
            className="bg-gray-700 p-2 rounded w-full text-white opacity-70"
          />
        </div>
        <div>
  <label className="text-white block">Posición</label>
  <select
    name="posicion"
    value={formData.posicion}
    onChange={handleChange}
    disabled={!editando}
    className="bg-gray-700 p-2 rounded w-full text-white"
  >
    {posiciones.map((p) => (
      <option key={p} value={p}>{p}</option>
    ))}
  </select>
</div>


        <div className="flex gap-3 pt-4">
          {editando ? (
            <>
              <button
                onClick={handleGuardar}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
              >
                Guardar
              </button>
              <button
                onClick={() => {
                  setEditando(false);
                  setFormData(datosSimulados);
                }}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditando(true)}
              className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded text-white"
            >
              Editar perfil
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
