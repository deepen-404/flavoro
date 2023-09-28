// export interface FoodCardProps {
//   id: number;
//   img: string;
//   name: string;
//   price: number;
//   desc: string;
//   category: string;
//   rating: number;
// }
// // icons
// import { AiFillStar } from "react-icons/ai";

// // redux
// import { useDispatch } from "react-redux/";
// import { addToCart } from "../../../store/slices/CartSlice";

// // FoodCard component receives FoodData and handleToast as a prop
// const FoodCard = ({
//   FoodData,
//   handleToast,
// }: {
//   FoodData: FoodCardProps[];
//   handleToast: (name:string) => void;
// }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="flex flex-row flex-wrap items-center justify-center gap-8 ">
//       {FoodData.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white min-h-[18.5rem] justify-center items-center w-[60%] md:w-[25%] lg:w-[20%] lg:gap- p-6 rounded-lg shadow-lg transition-all duration-[200ms] ease-in inline-block hover:transform hover:translate-y-[-5%] hover:shadow-2xl"
//         >
//           <img
//             src={item.img}
//             alt={item.name}
//             className="w-auto h-[130px] hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out
//             mx-auto  mb-3"
//           />
//           <div className="flex justify-between">
//             <h2 className="text-[1rem] mb-3 font-bold">{item.name}</h2>
//             <span className="font-semibold text-green-500">₹{item.price}</span>
//           </div>
//           <p className="text-[0.7rem] font-semibold">
//             {item.desc.substring(0, 60) + "..."}{" "}
//           </p>
//           <div className="flex justify-between mt-4 font-semibold">
//             <span className="flex items-center justify-center pt-2 text-yellow-300 gap-[0.2rem]">
//               <AiFillStar />{" "}
//               <span className="text-black text-[0.8rem]">{item.rating}</span>
//             </span>
//             <button
//               onClick={() => {
//                 dispatch(
//                   addToCart({
//                     image: item.img,
//                     id: item.id,
//                     name: item.name,
//                     price: item.price,
//                     quantity: 1,
//                   })
//                 );
//                 handleToast(item.name);
//               }}
//               className="px-2 py-1 text-[0.8rem] text-white bg-green-500 rounded-lg hover:text-green-500 hover:bg-gray-200 hover:translate-y-[-10%] transition-all duration-[200ms] ease-in font-bold"
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FoodCard;

import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/CartSlice";

interface FoodCardProps {
  id: number;
  img: string;
  name: string;
  price: number;
  desc: string;
  category: string;
  rating: number;
}

const FoodCard = ({
  FoodData,
  handleToast,
}: {
  FoodData: FoodCardProps;
  handleToast: (name: string) => void;
}) => {
  const dispatch = useDispatch();

  return (
    <div
      key={FoodData.id}
      className="bg-white min-h-[18.5rem] justify-center items-center w-[60%] md:w-[25%] lg:w-[20%] lg:gap- p-6 rounded-lg shadow-2xl transition-all duration-[200ms] ease-in inline-block hover:transform hover:translate-y-[-5%] hover:shadow-black"
    >
      <img
        src={FoodData.img}
        alt={FoodData.name}
        className="w-auto h-[130px] hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out
                 mx-auto  mb-3"
      />
      <div className="flex justify-between">
        <h2 className="text-[1rem] mb-3 font-bold">{FoodData.name}</h2>
        <span className="font-semibold text-green-500">₹{FoodData.price}</span>
      </div>
      <p className="text-[0.7rem] font-semibold">
        {FoodData.desc.substring(0, 60) + "..."}{" "}
      </p>
      <div className="flex justify-between mt-4 font-semibold">
        <span className="flex items-center justify-center pt-2 text-yellow-300 gap-[0.2rem]">
          <AiFillStar />{" "}
          <span className="text-black text-[0.8rem]">{FoodData.rating}</span>
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                image: FoodData.img,
                id: FoodData.id,
                name: FoodData.name,
                price: FoodData.price,
                quantity: 1,
              })
            );
            handleToast(FoodData.name);
          }}
          className="px-2 py-1 text-[0.8rem] text-white bg-green-500 rounded-lg hover:text-green-500 hover:bg-gray-200 hover:translate-y-[-10%] transition-all duration-[200ms] ease-in font-bold"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
