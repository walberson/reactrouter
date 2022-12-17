import { Header } from "../components/Header";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <Header />
      <Link to="/">
        <button>Link para Home</button>
      </Link>
      <Link to="/profile">
        <button>Link para Profile</button>
      </Link>
      <Link to="/profile/walberson">
        <button>Link para Walberson</button>
      </Link>
    </div>
  );
}
