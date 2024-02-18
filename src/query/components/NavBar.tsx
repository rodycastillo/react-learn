import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-sky-800 mb-4">
      <div className="container w-full flex justify-between flex-row  text-white items-center mx-auto py-3">
        <Link to="/">
          <span className="font-bold text-xl">REDUX TOOLKIT</span>
        </Link>

        <ul className="flex items-center flex-row gap-6">
          <li>
            <Link to="/">
              <span className="font-bold uppercase text-sm">Lista</span>
            </Link>
          </li>
          <li>
            <Link to="/create-task">
              <span className="font-bold uppercase text-sm">Crear</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
