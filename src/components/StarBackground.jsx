import { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    if (typeof window === "undefined") return;

    const count = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const stars = Array.from({ length: count }, () => ({
      id: crypto.randomUUID(),
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 4 + 2,
    }));

    setStars(stars);
  };

  useEffect(() => {
    generateStars();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `pulse-subtle ${star.duration}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
