"use strict";
(() => {

const setDims = () => {
  document.body.style.setProperty("--vh", `${window.innerHeight}px`);
  document.body.style.setProperty("--vw", `${window.innerWidth}px`);
  document.body.style.setProperty("--scroll-y", `${window.scrollY || 0}px`);
};

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", setDims);
  setDims();

  const iframes = Array.from(document.querySelectorAll("iframe")).filter(_ => _.allowFullscreen && !document.fullscreenEnabled);

  const listener = (e) => {
    const iframe = iframes.find(_ => _.contentWindow === e.source);
    if (!iframe) return;

    if ("type" in e.data && e.data.type === "fake-fullscreen") {
      // resize event doesn't work reliably in iOS...
      setDims();
      iframe.classList.toggle("fake-fullscreen", e.data.value);
    }
  };

  window.addEventListener("message", listener);
});

})();
