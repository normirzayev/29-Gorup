import { Navbar } from "./Pages/Navbar";
import { ShowPage } from "./Pages/ShowPage";

export function Wrapper() {
  return (
    <div className="Wrapper">
      <Navbar />
      <ShowPage />
    </div>
  );
}
