"use client";

export default function DeliveryCarAnimation() {
  return (
    <>
      <style>{`
        @keyframes drive-car {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        .delivery-car-image {
          animation: drive-car 20s ease-in-out infinite;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
        }
      `}</style>

      <div className="relative w-full mb-6 flex items-center justify-center overflow-hidden">
        <img
          src="/images/delivery-car.svg"
          alt="Balloon Bar delivery car"
          className="delivery-car-image w-full h-auto"
          style={{ maxWidth: "130%" }}
        />
      </div>
    </>
  );
}
