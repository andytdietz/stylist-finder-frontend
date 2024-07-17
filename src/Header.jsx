import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/stylists">Stylists</Link>
        <LogoutLink />
      </nav>
    </header>
  );
}
