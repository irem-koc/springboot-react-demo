import { NavLink } from "react-router";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-slate-800 p-5 rounded-xl">
      <ul className="flex items-center gap-4 text-white">
        <NavLink
          to="/"
          className="px-3 py-2 rounded-md transition-all duration-300 bg-transparent hover:bg-white hover:text-slate-800"
        >
          Öğrenciler Listesi
        </NavLink>
        <NavLink
          to="/add-student"
          className="px-3 py-2 rounded-md transition-all duration-300 bg-transparent hover:bg-white hover:text-slate-800"
        >
          Yeni Öğrenci Kayıt
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
