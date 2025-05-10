import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const SidebarLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const roles = user?.roles || [];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Club de Rugby</h2>

        <nav className="space-y-2 flex flex-col">
          {roles.includes("jugador") && (
            <>
              <h3 className="text-sm text-gray-400 uppercase mb-2 mt-4">Jugador</h3>
              <Link to="/jugador">Inicio</Link>
              <Link to="/jugador/entrenamientos">Entrenamientos</Link>
              <Link to="/jugador/partidos">Partidos</Link>
              <Link to="/jugador/pagos">Pagos</Link>
              <Link to="/jugador/perfil">Mi perfil</Link>
            </>
          )}

          {roles.includes("entrenador") && (
            <>
              <h3 className="text-sm text-gray-400 uppercase mb-2 mt-6">Entrenador</h3>
              <Link to="/entrenador">Inicio</Link>
              <Link to="/entrenador/mi-equipo">Mi equipo</Link>
              <Link to="/entrenador/partidos">Partidos</Link>
              <Link to="/entrenador/entrenamientos">Programar entrenamientos</Link>
              <Link to="/entrenador/asistencia">Asistencia</Link>
            </>
          )}

          {roles.includes("admin") && (
            <>
              <h3 className="text-sm text-gray-400 uppercase mb-2 mt-6">Administrador</h3>
              <Link to="/admin">Panel Admin</Link>
              <Link to="/admin/crear-partido">Crear Partido</Link>
              <Link to="/admin/crear-entrenamiento">Crear Entrenamiento</Link>
              <Link to="/admin/pagos">Revisar Pagos</Link>
            </>
          )}
        </nav>

        <button
          onClick={() => dispatch(logout())}
          className="mt-10 text-red-400 hover:text-red-500 text-sm"
        >
          Cerrar sesión
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
