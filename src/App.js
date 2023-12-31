import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="App"
      style={{ width: windowSize.width, height: windowSize.height }}
    >
      <model-viewer
        poster="/shared-assets/models/poster.jpg"
        src="/shared-assets/models/shoemediumpoly.glb"
        environment-image="/shared-assets/models/whipple_creek_regional_park_04_1k.hdr"
        skybox-image="/shared-assets/models/whipple_creek_regional_park_04_1k.hdr"
        ar
        // ar-modes="webxr scene-viewer quick-look"
        camera-controls
        // interaction-prompt="none"
        shadow-intensity="1"
        exposure="1"
        shadow-softness="1"
        camera-orbit="150deg 72.95deg 685.5m"
        field-of-view="30deg"
        tone-mapping="commerce"
        auto-rotate
      ></model-viewer>
    </div>
  );
}

export default App;
