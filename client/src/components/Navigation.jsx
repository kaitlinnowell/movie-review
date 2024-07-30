import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav>
      <Link to="/" className={pathname === "/" ? "underline" : ""}>
        Home
      </Link>
      <Link to="/rated" className={pathname === "/rated" ? "underline" : ""}>
        Rated
      </Link>
      <Link
        to="/favorites"
        className={pathname === "/favorites" ? "underline" : ""}
      >
        Favorites
      </Link>
    </nav>
  );
}
