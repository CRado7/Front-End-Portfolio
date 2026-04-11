import { useEffect } from "react";

export default function Lightbox({ screenshots, activeIndex, setActiveIndex }) {

  const shot = screenshots[activeIndex];

  function close() {
    setActiveIndex(null);
  }

  function next() {
    setActiveIndex((activeIndex + 1) % screenshots.length);
  }

  function prev() {
    setActiveIndex(
      (activeIndex - 1 + screenshots.length) % screenshots.length
    );
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="lightbox" onClick={close}>

      <button
        className="lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        ‹
      </button>

      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-caption title">
          <strong>{shot.title}</strong>
        </div>

        <img src={shot.image} alt={shot.title} />

        <div className="lightbox-caption">
          <p>{shot.caption}</p>
        </div>
      </div>

      <button
        className="lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        ›
      </button>

    </div>
  );
}