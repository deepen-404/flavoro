import { useDispatch } from "react-redux";
import { setSearch } from "../../store/slices/SearchSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col justify-between py-3 mx-6 mb-10 lg:flex-row">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          className="w-full p-3 text-sm border border-gray-400 rounded-md outline-none lg:w-[25vw] "
        />
      </div>
    </nav>
  );
};

export default NavBar;
