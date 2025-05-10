const equiposSimulados = [
    {
      nombre: "Primera",
      titulares: ["Pérez", "Gómez", "Díaz", "Fernández", "Sosa", "López", "Martínez", "Ramírez", "Castro", "Torres", "Molina", "Rojas", "Navarro", "Leiva", "Ortega"],
      suplentes: ["Silva", "Vega", "Ibarra"],
    },
    {
      nombre: "Intermedia",
      titulares: ["Suárez", "Correa", "Vargas", "Reyes", "Benítez", "Campos", "Herrera", "Ríos", "Mansilla", "Luna", "Paredes", "Agüero", "Varela", "Giménez", "Barrios"],
      suplentes: ["Moreno", "Paz"],
    },
    {
      nombre: "PreIntermedia A",
      titulares: ["Bravo", "Acosta", "Delgado", "Méndez", "Medina", "Peralta", "Espinoza", "Cabrera", "Roldán", "Quinteros", "Salas", "Ayala", "Aguirre", "Figueroa", "Serrano"],
      suplentes: [],
    },
    {
      nombre: "PreIntermedia B",
      titulares: ["Ruiz", "Alvarez", "Villalba", "Arce", "Romero", "Molina", "Ocampo", "Sánchez", "Lozano", "Bustamante", "Nieto", "Cardozo", "Guzmán", "Morales", "Zárate"],
      suplentes: ["Ledesma"],
    },
  ];
  
  const MyTeamPage = () => {
    return (
      <div>
        <h1 className="text-2xl text-cyan-400 font-bold mb-6">Mis Equipos</h1>
  
        {equiposSimulados.map((equipo) => (
          <div key={equipo.nombre} className="mb-10">
            <h2 className="text-xl text-white font-semibold mb-2">{equipo.nombre}</h2>
  
            <div className="bg-gray-800 p-4 rounded mb-2">
              <h3 className="text-cyan-300 mb-2">Titulares</h3>
              <ul className="grid grid-cols-2 gap-2">
                {equipo.titulares.map((nombre, i) => (
                  <li key={i} className="bg-gray-700 px-3 py-1 rounded">{nombre}</li>
                ))}
              </ul>
            </div>
  
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="text-cyan-300 mb-2">Suplentes</h3>
              {equipo.suplentes.length === 0 ? (
                <p className="text-gray-400">Sin suplentes asignados</p>
              ) : (
                <ul className="grid grid-cols-2 gap-2">
                  {equipo.suplentes.map((nombre, i) => (
                    <li key={i} className="bg-gray-700 px-3 py-1 rounded">{nombre}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MyTeamPage;
  