export default function ProgressBar({ label, percentage, Icon }) {
  return (
    <div className="w-full max-w-md">
      {/* ENCABEZADO */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 ml-1">
          {Icon && <Icon size={20}  />}
          <span className="text-base md:text-lg font-medium text-shadow-10 dark:text-shadow-1">
            {label}
          </span>
        </div>
        <span className="text-sm text-shadow-8 font-secondary mr-1 dark:text-shadow-3">
          {percentage}%
        </span>
      </div>

      {/* BARRA DE PROGRESO */}
      <div className="w-full bg-gray-300 h-3 rounded-full">
        <div
          className="h-3 rounded-full bg-purple-800"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}