import React, { useState } from 'react';
import { Heart, Coffee, Wind, Footprints, X } from 'lucide-react';

const WellnessIndicator = ({ tasks, activities }) => {
  const [isPauseMode, setIsPauseMode] = useState(false);

  // Calcular nivel de estrés basado en tareas urgentes y actividades del día
  const calculateStressLevel = () => {
    const urgentTasks = tasks.filter(task => !task.completed && task.priority === 'high').length;
    const mediumTasks = tasks.filter(task => !task.completed && task.priority === 'medium').length;

    // Obtener actividades de hoy
    const today = new Date();
    const todayActivities = activities.filter(activity => {
      const activityDate = new Date(activity.date);
      return activityDate.toDateString() === today.toDateString();
    }).length;

    // Calcular score de estrés
    const stressScore = (urgentTasks * 3) + (mediumTasks * 1) + (todayActivities * 0.5);

    if (stressScore <= 4) {
      return { level: 'low', color: 'green', emoji: '🟢', message: 'Todo bajo control', status: 'tranquilo' };
    } else if (stressScore <= 8) {
      return { level: 'medium', color: 'yellow', emoji: '🟡', message: 'Ritmo intenso', status: 'moderado' };
    } else {
      return { level: 'high', color: 'red', emoji: '🔴', message: 'Necesitas un respiro', status: 'alto' };
    }
  };

  const stressLevel = calculateStressLevel();

  // Sugerencias de pausa
  const pauseSuggestions = [
    { icon: Coffee, text: 'Toma 5 minutos para un café o té', duration: '5 min' },
    { icon: Wind, text: 'Respira profundo 3 veces', duration: '2 min' },
    { icon: Footprints, text: 'Camina o estira las piernas', duration: '10 min' },
  ];

  const handlePauseMode = () => {
    setIsPauseMode(true);
    // En una versión futura, esto podría ocultar notificaciones temporalmente
  };

  const closePauseMode = () => {
    setIsPauseMode(false);
  };

  // Colores según nivel
  const getColors = () => {
    switch (stressLevel.level) {
      case 'low':
        return {
          bg: 'bg-green-50',
          border: 'border-green-300',
          text: 'text-green-700',
          badge: 'bg-green-500',
          button: 'bg-green-600 hover:bg-green-700',
        };
      case 'medium':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-300',
          text: 'text-yellow-700',
          badge: 'bg-yellow-500',
          button: 'bg-yellow-600 hover:bg-yellow-700',
        };
      case 'high':
        return {
          bg: 'bg-red-50',
          border: 'border-red-300',
          text: 'text-red-700',
          badge: 'bg-red-500',
          button: 'bg-red-600 hover:bg-red-700',
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-300',
          text: 'text-gray-700',
          badge: 'bg-gray-500',
          button: 'bg-gray-600 hover:bg-gray-700',
        };
    }
  };

  const colors = getColors();

  return (
    <div className="px-6 py-4">
      {/* Indicador de Bienestar Principal */}
      <div className={`${colors.bg} rounded-2xl shadow-md p-5 border-2 ${colors.border}`}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-red-500" />
            Indicador de Bienestar
          </h2>
          <span className="text-2xl">{stressLevel.emoji}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className={`text-xl font-bold ${colors.text}`}>{stressLevel.message}</p>
            <p className="text-sm text-gray-600 mt-1">Nivel de carga: <span className="font-semibold">{stressLevel.status}</span></p>
          </div>
        </div>

        {/* Mostrar sugerencias si el nivel es medio o alto */}
        {(stressLevel.level === 'medium' || stressLevel.level === 'high') && !isPauseMode && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-3">
              {stressLevel.level === 'high'
                ? '⚠️ Considera tomar un descanso pronto:'
                : '💡 Recuerda cuidar tu bienestar:'}
            </p>

            <div className="space-y-2">
              {pauseSuggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <div key={index} className="flex items-center text-sm text-gray-600 bg-white rounded-lg p-2">
                    <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="flex-1">{suggestion.text}</span>
                    <span className="text-xs font-medium text-gray-500 ml-2">{suggestion.duration}</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handlePauseMode}
              className={`w-full mt-3 ${colors.button} text-white font-medium py-2 px-4 rounded-lg transition-all active:scale-95`}
            >
              Pausar 10 minutos 🧘‍♀️
            </button>
          </div>
        )}

        {/* Modo Pausa Activado */}
        {isPauseMode && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 relative">
              <button
                onClick={closePauseMode}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center">
                <div className="text-4xl mb-2">🌸</div>
                <h3 className="font-bold text-purple-800 mb-1">Modo Descanso Activado</h3>
                <p className="text-sm text-purple-700">
                  Tu descanso es productivo también 💚
                </p>
                <p className="text-xs text-purple-600 mt-2">
                  Relájate durante 10 minutos. Tu bienestar es prioridad.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje positivo para nivel bajo */}
        {stressLevel.level === 'low' && (
          <div className="mt-3 flex items-center justify-center">
            <p className="text-sm text-gray-600 text-center">
              ✨ Sigue así, estás manejando tu tiempo excelentemente
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WellnessIndicator;
