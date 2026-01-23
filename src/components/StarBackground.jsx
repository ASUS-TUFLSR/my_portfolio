import { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = () => {
    if (typeof window === "undefined") return;

    const count = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    setStars(
      Array.from({ length: count }, () => ({
        id: crypto.randomUUID(),
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 4 + 2,
      }))
    );
  };

  const generateMeteors = () => {
    if (typeof window === "undefined") return;

    setMeteors(
      Array.from({ length: 4 }, () => ({
        id: crypto.randomUUID(),
        width: Math.random() * 80 + 120, // 🔥 long streak
        height: 2,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 15,
        duration: Math.random() * 3 + 3,
      }))
    );
  };

  useEffect(() => {
    generateStars();
    generateMeteors();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* STARS */}
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

      {/* METEORS */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.width}px`,
            height: `${meteor.height}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
// meteors added