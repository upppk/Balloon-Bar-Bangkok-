export function HeartBalloonIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 40 Q30 20 50 20 Q70 20 70 40 Q70 70 50 85 Q30 70 30 40"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 85 L50 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StarBalloonIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 15 L61 45 L93 45 L69 62 L80 92 L50 75 L20 92 L31 62 L7 45 L39 45 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 75 L50 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RoundBalloonIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="40" r="25" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M50 65 L50 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function OrbzBalloonIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="35" cy="35" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="65" cy="50" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M50 72 L50 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CartoonBalloonIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M35 25 Q35 20 40 20 Q45 20 50 25 Q55 20 60 20 Q65 20 65 25 Q65 55 50 70 Q35 55 35 25"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 70 L50 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="40" r="4" fill="currentColor" />
    </svg>
  );
}

export function NumberBalloonIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 15 L56 35 L77 35 L61 47 L67 67 L50 55 L33 67 L39 47 L23 35 L44 35 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="70"
        fontSize="18"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
      >
        1
      </text>
      <path d="M50 80 L50 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HeliumIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}

export function QualityIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 50 L45 70 L75 30"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export function CustomPrintIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 40 L70 40 L70 80 Q70 85 65 85 L35 85 Q30 85 30 80 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 40 L40 25 Q40 20 45 20 L55 20 Q60 20 60 25 L60 40"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 55 L50 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DeliveryIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 60 L80 60 L75 80 Q75 85 70 85 L30 85 Q25 85 25 80 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M40 50 L40 20 M60 50 L60 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="15" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="60" cy="15" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export const BalloonIconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  heart: HeartBalloonIcon,
  star: StarBalloonIcon,
  round: RoundBalloonIcon,
  orbz: OrbzBalloonIcon,
  cartoon: CartoonBalloonIcon,
  number: NumberBalloonIcon,
};
