export function SparkleIcon({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/sparkle.png"
      alt=""
      className={`${className ?? ""} object-contain`}
      style={{ filter: "drop-shadow(0 4px 14px rgba(124,92,252,0.35))" }}
    />
  );
}

export function BoltIcon({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/bolt.png"
      alt=""
      className={`${className ?? ""} object-contain`}
      style={{ filter: "drop-shadow(0 4px 14px rgba(124,92,252,0.35))" }}
    />
  );
}
