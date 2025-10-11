import React from 'react';
import { Calendar, CheckSquare, Clock, Plus } from 'lucide-react';

const Dashboard = ({ userData, tasks, activities, onNavigate }) => {
  // Obtener fecha actual
  const today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayFormatted = today.toLocaleDateString('es-ES', dateOptions);

  // Contar tareas pendientes del día
  const todayTasks = tasks.filter(task => !task.completed);
  const pendingCount = todayTasks.length;
  const completedToday = tasks.filter(task => task.completed).length;

  // Encontrar próxima actividad
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const upcomingActivities = activities
    .filter(activity => {
      const activityDate = new Date(activity.date);
      const isToday = activityDate.toDateString() === now.toDateString();
      return isToday && activity.startTime > currentTime;
    })
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const nextActivity = upcomingActivities[0];

  // Calcular tiempo restante para próxima actividad
  const getTimeRemaining = (startTime) => {
    if (!startTime) return null;
    const [hours, minutes] = startTime.split(':').map(Number);
    const activityTime = new Date();
    activityTime.setHours(hours, minutes, 0);

    const diff = activityTime - now;
    const hoursRemaining = Math.floor(diff / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hoursRemaining > 0) {
      return `En ${hoursRemaining}h ${minutesRemaining}m`;
    }
    return `En ${minutesRemaining}m`;
  };

  // Obtener color según tipo de actividad
  const getActivityColor = (type) => {
    const colors = {
      class: 'bg-blue-500',
      work: 'bg-purple-500',
      study: 'bg-green-500',
      personal: 'bg-yellow-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">TimeFlow</h1>
        <p className="text-lg opacity-90">Hola, {userData.name} 👋</p>
      </div>

      {/* Fecha actual */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="text-sm capitalize">{todayFormatted}</span>
        </div>
      </div>

      {/* Resumen de tareas */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-textDark mb-4 flex items-center">
            <CheckSquare className="w-5 h-5 mr-2 text-primary" />
            Resumen del día
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-400">
              <div className="text-2xl font-bold text-orange-600">{pendingCount}</div>
              <div className="text-sm text-gray-600">Pendientes</div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
              <div className="text-2xl font-bold text-green-600">{completedToday}</div>
              <div className="text-sm text-gray-600">Completadas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Próxima actividad */}
      {nextActivity ? (
        <div className="px-6 py-2">
          <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-2xl shadow-md p-5 border-2 border-primary/20">
            <h2 className="text-lg font-semibold text-textDark mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              Próxima actividad
            </h2>

            <div className="flex items-start">
              <div className={`w-2 h-full ${getActivityColor(nextActivity.type)} rounded-full mr-4`}></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">{nextActivity.title}</h3>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{nextActivity.startTime} - {nextActivity.endTime}</span>
                </div>
                <div className="mt-2 inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {getTimeRemaining(nextActivity.startTime)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 py-2">
          <div className="bg-green-50 rounded-2xl shadow-md p-5 border-2 border-green-200">
            <p className="text-center text-green-700 font-medium">
              ✨ No tienes más actividades programadas para hoy
            </p>
          </div>
        </div>
      )}

      {/* Tareas urgentes */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-textDark mb-4">
            ⚠️ Tareas prioritarias
          </h2>

          {todayTasks.filter(t => t.priority === 'high').slice(0, 3).map(task => (
            <div key={task.id} className="mb-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <p className="font-medium text-gray-800">{task.title}</p>
              <p className="text-sm text-gray-600 mt-1">
                Vence: {new Date(task.dueDate).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })} a las {task.dueTime}
              </p>
            </div>
          ))}

          {todayTasks.filter(t => t.priority === 'high').length === 0 && (
            <p className="text-gray-500 text-center py-2">No tienes tareas urgentes 🎉</p>
          )}
        </div>
      </div>

      {/* Accesos rápidos */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-textDark mb-3">Accesos rápidos</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('tasks')}
            className="bg-primary hover:bg-primary/90 text-white rounded-xl p-4 shadow-md flex flex-col items-center justify-center transition-all active:scale-95"
          >
            <Plus className="w-8 h-8 mb-2" />
            <span className="text-sm font-medium">Agregar tarea</span>
          </button>

          <button
            onClick={() => onNavigate('calendar')}
            className="bg-secondary hover:bg-secondary/90 text-white rounded-xl p-4 shadow-md flex flex-col items-center justify-center transition-all active:scale-95"
          >
            <Calendar className="w-8 h-8 mb-2" />
            <span className="text-sm font-medium">Ver calendario</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
