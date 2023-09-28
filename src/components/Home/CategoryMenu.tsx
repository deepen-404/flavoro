import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/slices/CategorySlice";
import { RootState } from "../../store/Store";

const CategoryMenu = ({ category }: { category: string[] }) => {
  
  // extracting unique categories
  const uniqueCategories = () => {
    const categories = new Set(category.map((item) => item));
    return Array.from(categories);
  };
  const categories = uniqueCategories();

  useEffect(() => {
    uniqueCategories();
  }, []);

  const dispatch = useDispatch();

  const reducerCategory = useSelector(
    (store: RootState) => store.category.category
  );

  return (
    <section className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="flex flex-wrap gap-4 my-5">
        <button
          className={`px-3 hover:translate-y-[-15%] py-2 font-bold text-center transition-all duration-200 ${
            reducerCategory === "All"
              ? "bg-green-500 text-white hover:bg-green-500 hover:text-white"
              : "bg-gray-200 hover:bg-green-500 hover:text-gray-100"
          } rounded-lg`}
          onClick={() => {
            dispatch(setCategory("All"));
          }}
        >
          All
        </button>
        {categories.map((item, index) => (
          <button
            className={`px-3 hover:translate-y-[-15%] py-2 font-bold text-center transition-all duration-200 ${
              reducerCategory === item
                ? "bg-green-500 text-white hover:bg-green-500 hover:text-white"
                : "bg-gray-200 hover:bg-green-500 hover:text-gray-100"
            } rounded-lg`}
            key={index}
            onClick={() => {
              dispatch(setCategory(item));
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
