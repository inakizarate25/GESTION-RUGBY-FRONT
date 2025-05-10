import { Link, Outlet, useLocation } from "react-router-dom";

const SidebarLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // 🔐 Esto se reemplazará con datos reales del usuario logueado
  const usuarioSimulado = {
    roles: ["jugador", "entrenador", "admin"], // roles activos
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Club de Rugby</h2>

        <nav className="space-y-2">
          {/* Menú de JUGADOR */}
          {usuarioSimulado.roles.includes("jugador") && (
            <>
              <h3 className="text-sm text-gray-400 uppercase mb-2 mt-4">Jugador</h3>
              <Link to="/jugador" className="block hover:text-cyan-400">Inicio</Link>
              <Link to="/jugador/entrenamientos" className="block hover:text-cyan-400">Entrenamientos</Link>
              <Link to="/jugador/partidos" className="block hover:text-cyan-400">Partidos</Link>
              <Link to="/jugador/pagos" className="block hover:text-cyan-400">Pagos</Link>
              <Link to="/jugador/perfil" className="block hover:text-cyan-400">Mi perfil</Link>
            </>
          )}

          {/* Menú de ENTRENADOR */}
          {usuarioSimulado.roles.includes("entrenador") && (
            <>
              <h3 className="text-sm text-gray-400 uppercase mb-2 mt-6">Entrenador</h3>
              <Link to="/entrenador" className="block hover:text-cyan-400">Inicio</Link>
              <Link to="/entrenador/mi-equipo" className="block hover:text-cyan-400">Mi equipo</Link>
              <Link to="/entrenador/entrenamientos" className="block hover:text-cyan-400">Programar entrenamientos</Link>
              <Link to="/entrenador/partidos" className="block hover:text-cyan-400">Programar partidos</Link>
              <Link to="/entrenador/asistencia" className="block hover:text-cyan-400">Asistencia</Link>
            </>
          )}

          {/* Menú de ADMIN */}
          {usuarioSimulado.roles.includes("admin") && (
            <>
              <h3 className="text-sm text-gray-400 uppercase mb-2 mt-6">Administrador</h3>
              <Link to="/admin" className="block hover:text-cyan-400">Panel Admin</Link>
              <Link to="/admin/crear-partido" className="block hover:text-cyan-400">Crear partido</Link>
              <Link to="/admin/crear-entrenamiento" className="block hover:text-cyan-400">Crear entrenamiento</Link>
              <Link to="/admin/pagos" className="block hover:text-cyan-400">Revisión de Pagos</Link>
            </>

          )}
        </nav>

        {/* Logout */}
        <button className="mt-10 text-red-400 hover:text-red-500 text-sm">
          Cerrar sesión
        </button>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
