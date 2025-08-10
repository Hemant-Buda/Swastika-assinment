import AppRoutes from "./AppRoutes/AppRoutes";
import autoAnimate from "@formkit/auto-animate";
import Navbar from "./Components/Navbar/Navbar";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import { useEffect, useRef } from "react";
function App() {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <>
      <ScrollTop />
      <Navbar />
      <main ref={parent}>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
