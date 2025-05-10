import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      // Simulamos login (acá iría el fetch real al backend)
      const fakeUser = {
        id: 1,
        email: values.email,
        roles: ["jugador"],
        nombre: "Juan Pérez",
      };

      // Validación ficticia
      if (values.email === "admin@club.com" && values.password === "1234") {
        dispatch(loginSuccess(fakeUser));
        navigate("/jugador"); // Cambiar ruta según el rol
      } else {
        setErrors({ password: "Credenciales inválidas" });
      }
    } catch (error) {
      setErrors({ password: "Error inesperado" });
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl text-cyan-400 font-bold mb-8">Club de Rugby</h1>

      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-white text-xl mb-4">Ingresar al sistema</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Email inválido").required("Requerido"),
            password: Yup.string().required("Requerido"),
          })}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="text-white">Email:</label>
                <Field
                  name="email"
                  type="email"
                  className="bg-gray-700 w-full p-2 rounded text-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="text-white">Contraseña:</label>
                <Field
                  name="password"
                  type="password"
                  className="bg-gray-700 w-full p-2 rounded text-white"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded mt-2"
              >
                Iniciar sesión
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-white mt-4 text-sm">
          ¿No tenés cuenta?{" "}
          <a href="/register" className="text-cyan-400 underline">
            Registrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
