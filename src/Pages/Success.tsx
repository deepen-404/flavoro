import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        {loading ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          <div>
            <h2 className="text-3xl text-center font-semibold mb-1">
              Order Successful🎉!
            </h2>
            <h1 className="mb-4">
              Your order has been sucessfully placed😉!!{" "}
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
