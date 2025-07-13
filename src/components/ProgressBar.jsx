export default function ProgressBar({ label, percentage, Icon }) {
  return (
    <div className="w-full max-w-md">
      {/* Encabezado: icono, texto, porcentaje */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2 ml-4">
          {Icon && <Icon size={20}  />}
          <span className="text-lg font-medium text-shadow-10 dark:text-shadow-1">{label}</span>
        </div>
        <span className="text-sm text-shadow-8 font-secondary mr-4 dark:text-shadow-3">{percentage}%</span>
      </div>

      {/* Barra de progreso */}
      <div className="w-full bg-gray-300 h-3 rounded-full">
        <div
          className="h-3 rounded-full bg-purple-800"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}