import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "../components/SidebarLayout";

// Auth
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

// Jugador
import PlayerDashboard from "../pages/jugador/PlayerDashboard";
import MyTrainingsPage from "../pages/jugador/MyTrainingsPage";
import MyMatchesPage from "../pages/jugador/MyMatchesPage";
import MyPaymentsPage from "../pages/jugador/MyPaymentsPage";
import ProfilePage from "../pages/jugador/ProfilePage";

// Entrenador
import CoachDashboard from "../pages/entrenador/CoachDashboard";
import MyTeamPage from "../pages/entrenador/MyTeamPage";
import ProgramarPartidoPage from "../pages/entrenador/ProgramarPartidoPage";
import AsistenciaEntrenamientoPage from "../pages/entrenador/AsistenciaEntrenamientoPage";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminCrearPartidoPage from "../pages/admin/AdminCrearPartidoPage";
import AdminCrearEntrenamientoPage from "../pages/admin/AdminCrearEntrenamientoPage";
import AdminPagosPage from "../pages/admin/AdminPagosPage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rutas protegidas con layout */}
      <Route element={<SidebarLayout />}>

        {/* Jugador */}
        <Route path="/jugador" element={<PlayerDashboard />} />
        <Route path="/jugador/entrenamientos" element={<MyTrainingsPage />} />
        <Route path="/jugador/partidos" element={<MyMatchesPage />} />
        <Route path="/jugador/pagos" element={<MyPaymentsPage />} />
        <Route path="/jugador/perfil" element={<ProfilePage />} />

        {/* Entrenador */}
        <Route path="/entrenador" element={<CoachDashboard />} />
        <Route path="/entrenador/mi-equipo" element={<MyTeamPage />} />
        <Route path="/entrenador/entrenamientos" element={<ProgramarPartidoPage />} />
        <Route path="/entrenador/partidos" element={<ProgramarPartidoPage />} />
        <Route path="/entrenador/asistencia" element={<AsistenciaEntrenamientoPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/crear-partido" element={<AdminCrearPartidoPage />} />
        <Route path="/admin/crear-entrenamiento" element={<AdminCrearEntrenamientoPage />} />
        <Route path="/admin/pagos" element={<AdminPagosPage />} />

      </Route>

      {/* Ruta por defecto */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
