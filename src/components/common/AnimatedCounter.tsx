import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  duration = 1500,
}: AnimatedCounterProps) {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        start = numericValue;
        clearInterval(timer);
      }

      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <>
      {Number.isInteger(numericValue)
        ? Math.round(count)
        : count.toFixed(1)}
      {suffix}
    </>
  );
}