// icons
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseInCart,
  decreaseInCart,
} from "../../../store/slices/CartSlice";

// type
import { RootState } from "../../../store/Store";

const CartItems = ({
  handleToast,
}: {
  handleToast: (name: string) => void;
}) => {
  const itemArray = useSelector((store: RootState) => store.cart.cart);
  const dispatch = useDispatch();

  if (itemArray.length === 0) {
    return <p className="font-bold mx-auto my-auto">Your cart is empty.</p>;
  } else {
    return (
      <div>
        {itemArray.map((item) => (
          <div
            key={item.id}
            className="w-[60%] md:w-[80%] flex gap-2 p-2 rounded-lg shadow-md lg:w-[90%] mx-auto hover:shadow-lg transition-all duration-300 ease-in"
          >
            <div>
              <img
                src={item.image}
                alt=""
                className="w-[3.1rem] aspect-square"
              />
            </div>
            <div>
              <h2 className="font-bold text-gray-800">{item.name}</h2>
              <div className="flex items-center justify-between w-full gap-[7rem]">
                <span className="font-bold text-green-400">₹{item.price}</span>
                <div
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    handleToast(item.name);
                  }}
                  className="text-[1.5rem] cursor-pointer hover:translate-y-[-7%] transition-all duration-200 ease-in"
                >
                  <AiFillDelete />
                </div>
              </div>
              <div className="flex items-center justify-between gap-1 w-[50%] mt-2">
                <div
                  onClick={() => {
                    dispatch(increaseInCart(item.id));
                  }}
                  className="text-black transition-all duration-100 ease-in bg-white border-2 border-black rounded-md w-fit hover:text-white hover:bg-green-400 hover:translate-y-[-10%] cursor-pointer text-[0.9rem] p-[0.2rem] h-fit"
                >
                  <AiOutlinePlus />
                </div>
                <span>{item.quantity} </span>
                <div
                  onClick={() => {
                    dispatch(decreaseInCart(item.id));
                  }}
                  className="text-black transition-all duration-100 ease-in bg-white border-2 border-black rounded-md w-fit hover:text-white hover:bg-green-400 hover:translate-y-[-10%] cursor-pointer text-[0.9rem] p-[0.2rem] h-fit"
                >
                  <BiMinus />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default CartItems;
