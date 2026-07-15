"use client";

export default function FloatingBalloons() {
  const balloons = [
    { id: 1, color: "#FFD700", left: "8%", delay: "0s", duration: "8s" },
    { id: 2, color: "#00CED1", left: "18%", delay: "1s", duration: "10s" },
    { id: 3, color: "#FF8C00", left: "82%", delay: "0.5s", duration: "9s" },
    { id: 4, color: "#FF1493", left: "28%", delay: "2s", duration: "8.5s" },
    { id: 5, color: "#FF6347", left: "88%", delay: "1.5s", duration: "11s" },
    { id: 6, color: "#87CEEB", left: "72%", delay: "0.8s", duration: "10.5s" },
  ];

  return (
    <>
      <style>{`
        @keyframes float-up-balloon {
          from {
            transform: translateY(100%) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          to {
            transform: translateY(-100vh) translateX(80px);
            opacity: 0;
          }
        }

        .balloon-float {
          animation: float-up-balloon linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {balloons.map((balloon) => (
          <div key={balloon.id}>
            {/* Balloon circle */}
            <div
              className="balloon-float absolute rounded-full"
              style={{
                width: "50px",
                height: "60px",
                backgroundColor: balloon.color,
                left: balloon.left,
                bottom: "-80px",
                animation: `float-up-balloon ${balloon.duration} linear infinite`,
                animationDelay: balloon.delay,
                boxShadow: `inset -8px -8px 16px rgba(0, 0, 0, 0.15), 4px 4px 8px rgba(0, 0, 0, 0.1)`,
                borderRadius: "50% 50% 50% 45%",
              }}
            />
            {/* String */}
            <div
              className="absolute"
              style={{
                width: "1px",
                height: "50px",
                background: "rgba(0, 0, 0, 0.08)",
                left: `calc(${balloon.left} + 25px)`,
                bottom: "-130px",
                animation: `float-up-balloon ${balloon.duration} linear infinite`,
                animationDelay: balloon.delay,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
