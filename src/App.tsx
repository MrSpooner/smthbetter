import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame4";
import Home from "./pages/Home";
import Frame2 from "./pages/Frame2";
import Frame1 from "./pages/Frame";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame41";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame1 from "./pages/Frame1";
import Frame7 from "./pages/Frame7";
import Home1 from "./pages/Home1";
import Frame from "./pages/Frame8";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/home1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Frame2 />} />
      <Route path="/1" element={<Frame1 />} />
      <Route path="/2" element={<Frame3 />} />
      <Route path="/3" element={<Frame4 />} />
      <Route path="/4" element={<Frame5 />} />
      <Route path="/5" element={<Frame6 />} />
      <Route path="/6" element={<Frame1 />} />
      <Route path="/7" element={<Frame7 />} />
      <Route path="/home1" element={<Home1 />} />
      <Route path="/desktop" element={<Frame />} />
    </Routes>
  );
}
export default App;
