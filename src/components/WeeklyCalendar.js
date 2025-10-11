import React from 'react';
import { Plus, Clock } from 'lucide-react';
import { activityTypes, weekDays } from '../data/mockData';

const WeeklyCalendar = ({ activities }) => {
  // Agrupar actividades por día
  const activitiesByDay = weekDays.reduce((acc, day) => {
    acc[day] = activities.filter(activity => activity.day === day);
    return acc;
  }, {});

  // Obtener color según tipo
  const getActivityStyle = (type) => {
    return activityTypes[type] || activityTypes.personal;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-6 rounded-b-3xl shadow-lg sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Calendario Semanal</h1>
        <p className="text-sm opacity-90 mt-1">Tu horario de la semana</p>
      </div>

      {/* Leyenda de colores */}
      <div className="px-6 py-4 bg-white shadow-sm">
        <div className="grid grid-cols-2 gap-2 text-xs">
          {Object.entries(activityTypes).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${value.color} mr-2`}></div>
              <span className="text-gray-600">{value.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendario por días */}
      <div className="px-4 py-4 space-y-4">
        {weekDays.map((day) => {
          const dayActivities = activitiesByDay[day] || [];
          const hasActivities = dayActivities.length > 0;

          return (
            <div key={day} className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Header del día */}
              <div className={`p-4 ${hasActivities ? 'bg-gradient-to-r from-primary/10 to-purple-50' : 'bg-gray-50'}`}>
                <h2 className="text-lg font-bold text-gray-800">{day}</h2>
                <p className="text-xs text-gray-600 mt-1">
                  {dayActivities.length} {dayActivities.length === 1 ? 'actividad' : 'actividades'}
                </p>
              </div>

              {/* Actividades del día */}
              <div className="p-4 space-y-3">
                {hasActivities ? (
                  dayActivities.map((activity) => {
                    const style = getActivityStyle(activity.type);
                    return (
                      <div
                        key={activity.id}
                        className={`${style.bgLight} rounded-xl p-4 border-l-4 ${style.color.replace('bg-', 'border-')} shadow-sm`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                            <div className="flex items-center mt-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{activity.startTime} - {activity.endTime}</span>
                            </div>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${style.color}`}></div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <p className="text-sm">No tienes actividades programadas</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón flotante para agregar actividad */}
      <button
        className="fixed bottom-24 right-6 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all active:scale-95 z-20"
        aria-label="Agregar nueva actividad"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WeeklyCalendar;
