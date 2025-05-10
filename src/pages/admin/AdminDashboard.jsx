import { useState } from "react";

const AdminDashboard = () => {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan@mail.com",
      aprobado: false,
      rol: "",
    },
    {
      id: 2,
      nombre: "Ana López",
      email: "ana@mail.com",
      aprobado: false,
      rol: "",
    },
  ]);

  const aprobarUsuario = (id, rol) => {
    const nuevosUsuarios = usuarios.map((u) =>
      u.id === id ? { ...u, aprobado: true, rol } : u
    );
    setUsuarios(nuevosUsuarios);
  };

  const rechazarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter((u) => u.id !== id);
    setUsuarios(nuevosUsuarios);
  };

  return (
    <div>
      <h1 className="text-2xl text-cyan-400 font-bold mb-4">Panel de Administración</h1>
      <h2 className="text-white text-lg mb-2">Usuarios pendientes de aprobación</h2>

      <ul className="space-y-4">
        {usuarios
          .filter((u) => !u.aprobado)
          .map((usuario) => (
            <li key={usuario.id} className="bg-gray-800 p-4 rounded">
              <p><strong>Nombre:</strong> {usuario.nombre}</p>
              <p><strong>Email:</strong> {usuario.email}</p>

              <div className="mt-2 space-x-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  onClick={() => aprobarUsuario(usuario.id, "jugador")}
                >
                  Aprobar como Jugador
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => aprobarUsuario(usuario.id, "entrenador")}
                >
                  Aprobar como Entrenador
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => rechazarUsuario(usuario.id)}
                >
                  Rechazar
                </button>
              </div>
            </li>
          ))}
      </ul>

      <h2 className="text-white text-lg mt-10 mb-2">Usuarios aprobados</h2>
      <ul className="space-y-2">
        {usuarios
          .filter((u) => u.aprobado)
          .map((u) => (
            <li key={u.id} className="bg-gray-800 p-4 rounded">
              <p>
                {u.nombre} - <span className="text-cyan-400">{u.rol}</span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
