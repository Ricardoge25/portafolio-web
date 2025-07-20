import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ProgressBar({ label, percentage, Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${percentage}%` });

      // Contador animado
      let start = 0;
      const duration = 1500; // milisegundos
      const increment = percentage / (duration / 10); // cuánto sumar cada 10ms

      const interval = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          start = percentage;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 10);
    }
  }, [isInView, controls, percentage]);

  return (
    <div ref={ref} className="w-full max-w-md">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-xl" />
        <span className="text-lg font-semibold dark:text-white">{label}</span>
        <span className="ml-auto text-sm text-shadow-8 dark:text-shadow-2">
          {count}%
        </span>
      </div>

      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-purple-800 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}