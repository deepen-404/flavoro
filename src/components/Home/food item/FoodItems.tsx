// data
import FoodData from "../../../data/FoodData.json";

// react-toast
import toast, { Toaster } from "react-hot-toast";

// components
import FoodCard from "./FoodCard";

// redux
import { useSelector } from "react-redux";

// type
import { RootState } from "../../../store/Store";

const FoodItems = () => {
  const search = useSelector((store: RootState) => store.search.search);
  const reducerCategory = useSelector(
    (store: RootState) => store.category.category
  );
  // react toast function
  const handleToast = (name: string) => toast.success(`Added ${name}`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-8">
        {FoodData.filter((item) => {
          if (reducerCategory === "All") {
            return item.name.toLowerCase().includes(search?.toLowerCase());
          } else {
            return (
              item.category === reducerCategory &&
              item.name.toLowerCase().includes(search?.toLowerCase())
            );
          }
        }).map((item) => {
          return (
            <FoodCard key={item.id} FoodData={item} handleToast={handleToast} />
          );
        })}
      </div>
    </>
  );
};

// console.log(FoodData);
export default FoodItems;
