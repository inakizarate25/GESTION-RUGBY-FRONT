import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    nombre: "",
    email: "",
    password: "",
    dni: "",
    telefono: "",
    direccion: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Requerido"),
    email: Yup.string().email("Email inválido").required("Requerido"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulamos registro
      console.log("Registro enviado:", values);
      alert("Registro enviado. Esperá aprobación del administrador.");
      resetForm();
      navigate("/login");
    } catch (error) {
      console.error("Error en registro", error);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl text-cyan-400 font-bold mb-8">Registro</h1>

      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="text-white">Nombre</label>
                <Field name="nombre" className="bg-gray-700 w-full p-2 rounded text-white" />
                <ErrorMessage name="nombre" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="text-white">Email</label>
                <Field name="email" type="email" className="bg-gray-700 w-full p-2 rounded text-white" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="text-white">Contraseña</label>
                <Field name="password" type="password" className="bg-gray-700 w-full p-2 rounded text-white" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="text-white">DNI</label>
                <Field name="dni" className="bg-gray-700 w-full p-2 rounded text-white" />
              </div>

              <div>
                <label className="text-white">Teléfono</label>
                <Field name="telefono" className="bg-gray-700 w-full p-2 rounded text-white" />
              </div>

              <div>
                <label className="text-white">Dirección</label>
                <Field name="direccion" className="bg-gray-700 w-full p-2 rounded text-white" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded mt-2"
              >
                Registrarse
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-white mt-4 text-sm">
          ¿Ya tenés cuenta?{" "}
          <a href="/login" className="text-cyan-400 underline">
            Iniciá sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
