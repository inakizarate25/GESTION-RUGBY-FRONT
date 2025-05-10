const PlayerDashboard = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          Bienvenido, Jugador
        </h1>
  
        <section className="mb-8">
          <h2 className="text-xl mb-2">Tus datos personales</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Email:</strong> juan@club.com</p>
            <p><strong>Rol:</strong> Jugador</p>
          </div>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl mb-2">Próximos entrenamientos</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="list-disc list-inside">
              <li>Miércoles 15 - 20:00hs - Club Rugby</li>
              <li>Viernes 17 - 20:00hs - Club Rugby</li>
            </ul>
          </div>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl mb-2">Próximos partidos</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="list-disc list-inside">
              <li>Domingo 19 - vs. Club Atlético - 16:00hs</li>
              <li>Domingo 26 - vs. San Martín RC - 16:00hs</li>
            </ul>
          </div>
        </section>
  
        <section>
          <h2 className="text-xl mb-2">Pagos de comidas</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="list-disc list-inside">
              <li>Post-partido vs. Atlético - $2500 - <span className="text-green-400">Pagado</span></li>
              <li>Post-entrenamiento 15/05 - $1500 - <span className="text-red-400">Pendiente</span></li>
            </ul>
          </div>
        </section>
      </div>
    );
  };
  
  export default PlayerDashboard;
  