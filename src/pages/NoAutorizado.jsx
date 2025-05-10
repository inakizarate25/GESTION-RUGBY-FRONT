const NoAutorizado = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-red-500 font-bold">Acceso Denegado</h1>
          <p>No tenés permisos para acceder a esta sección.</p>
          <a href="/" className="text-cyan-400 underline">Volver al inicio</a>
        </div>
      </div>
    );
  };
  
  export default NoAutorizado;
  