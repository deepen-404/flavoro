// data
import FoodData from "../data/FoodData.json";

// components
import CategoryMenu from "../components/Home/CategoryMenu";
import FoodItems from "../components/Home/food item/FoodItems";
import NavBar from "../components/Home/NavBar";
import Cart from "../components/Home/cart/Cart";

const Home = () => {
  // data extraction
  const category = FoodData.map((item) => {
    return item.category;
  });
  return (
    <>
      <NavBar />
      <CategoryMenu category={category} />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;
