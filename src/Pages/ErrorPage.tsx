import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center  flex-col items-center">
      <h2 className="font-semibold text-2xl">
        The page you have requested doesn't exist😢.
      </h2>
      <button
        onClick={() => navigate("/")}
        className="bg-green-500 px-4 py-3 rounded-3xl mt-7 text-lg font-semibold text-gray-100 hover:bg-gray-400 hover:translate-y-[-10%] transition-all duration-200 ease-in"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
