const CoachDashboard = () => {
    return (
      <div>
        <h1 className="text-2xl text-cyan-400 font-bold mb-6">Bienvenido, Entrenador</h1>
  
        <section className="mb-8">
          <h2 className="text-white text-lg mb-2">Tu equipo</h2>
          <div className="bg-gray-800 p-4 rounded">
            <ul className="list-disc list-inside">
              <li>Juan Pérez</li>
              <li>Ana Gómez</li>
              <li>Lautaro Díaz</li>
            </ul>
          </div>
        </section>
  
        <section className="mb-8">
          <h2 className="text-white text-lg mb-2">Entrenamientos programados</h2>
          <div className="bg-gray-800 p-4 rounded">
            <ul className="list-disc list-inside">
              <li>Miércoles 15 - 20:00hs</li>
              <li>Viernes 17 - 20:00hs</li>
            </ul>
          </div>
        </section>
  
        <section className="mb-8">
          <h2 className="text-white text-lg mb-2">Partidos próximos</h2>
          <div className="bg-gray-800 p-4 rounded">
            <ul className="list-disc list-inside">
              <li>Domingo 19 - vs Atlético</li>
              <li>Domingo 26 - vs San Martín RC</li>
            </ul>
          </div>
        </section>
  
        <section>
          <h2 className="text-white text-lg mb-2">Asistencia reciente</h2>
          <div className="bg-gray-800 p-4 rounded">
            <p>Miércoles 08/05 - 14 presentes, 2 ausentes</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default CoachDashboard;
  