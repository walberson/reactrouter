import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Walberson } from "./pages/Walberson";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile">
        <Route index element={<Profile />} />
        <Route path="walberson" element={<Walberson />} />
      </Route>
    </Routes>
  );
}
