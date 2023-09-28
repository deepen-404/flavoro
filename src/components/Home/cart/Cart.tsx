import { useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

// component
import CartItems from "./CartItems";

// redux
import { useSelector } from "react-redux";

// type
import { RootState } from "../../../store/Store";

// react-toast
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  // state to toggle cart
  const [isCartShowing, setIsCartIsShowing] = useState(false);

  const itemsInCart = useSelector((store: RootState) => store.cart.cart);
  let totalQty = 0;
  itemsInCart.forEach((item) => {
    totalQty += item.quantity;
  });

  let totalPrice = 0;
  itemsInCart.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });

  // react toast function
  const handleToast = (name: string) =>
    toast(name + " Removed!", {
      icon: "✖️",
    });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`fixed top-0 right-0 w-full lg:w-[25%] bg-white h-full md:w-[40%] shadow-lg rounded-lg  ${
          isCartShowing ? "translate-x-0" : "translate-x-full"
        } transition-all duration-[1s] z-10`}
      >
        <div className="flex justify-between mx-auto w-[90%] py-6 px-4">
          <span className="text-xl font-bold text-black">My Order</span>
          <div
            className="text-black transition-all duration-100 ease-in bg-white border-2 border-black rounded-md w-fit hover:text-white hover:bg-red-400 hover:translate-y-[-10%] cursor-pointer text-[0.8rem] p-[0.2rem] h-fit"
            onClick={(PrevState) => setIsCartIsShowing(!PrevState)}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="overflow-y-scroll h-[29rem] flex flex-col gap-4">
          <CartItems handleToast={handleToast} />
        </div>
        <div className="absolute w-full bottom-2">
          <h3 className="pb-1 ml-2 font-bold text-gray-800">
            <span className="text-green-500">Items</span> : {totalQty}{" "}
          </h3>
          <h3 className="pb-1 ml-2 font-bold text-gray-800 ">
            <span className="text-green-500">Total Amount</span>: ₹{totalPrice}
          </h3>
          <hr />
          <div className="mx-auto w-[90%] flex items-center justify-center mt-3 lg:justify-start">
            <button 
            onClick={() => navigate("/success")}
            className="w-[90%]  mx-auto px-3 py-2 text-[0.8rem] text-white bg-green-500 rounded-lg hover:text-green-500 hover:bg-gray-200 hover:translate-y-[-10%] transition-all duration-[200ms] ease-in font-bold">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div
        className="rounded-full bg-white shadow-md tex-5xl 
      p-3 fixed lg:top-[7rem] right-6  hover:text-white hover:bg-green-400 hover:translate-y-[-10%] cursor-pointer transition-all duration-200 ease-in top-[8rem]"
        onClick={() => setIsCartIsShowing(true)}
      >
        <FaShoppingCart />
      </div>
    </>
  );
};

export default Cart;
