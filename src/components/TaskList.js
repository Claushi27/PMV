import React, { useState } from 'react';
import { Plus, CheckCircle2, Circle, Filter } from 'lucide-react';
import { priorities } from '../data/mockData';

const TaskList = ({ tasks, onToggleTask }) => {
  const [activeTab, setActiveTab] = useState('today');
  const [showCompleted, setShowCompleted] = useState(true);

  // Filtrar tareas según tab activo
  const getFilteredTasks = () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    const weekFromNow = new Date();
    weekFromNow.setDate(weekFromNow.getDate() + 7);
    const weekStr = weekFromNow.toISOString().split('T')[0];

    let filtered = tasks;

    if (activeTab === 'today') {
      filtered = tasks.filter(task => task.dueDate === todayStr);
    } else if (activeTab === 'week') {
      filtered = tasks.filter(task => task.dueDate <= weekStr && task.dueDate >= todayStr);
    }

    if (!showCompleted) {
      filtered = filtered.filter(task => !task.completed);
    }

    return filtered.sort((a, b) => {
      // Primero por completado
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      // Luego por prioridad
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  const filteredTasks = getFilteredTasks();
  const pendingCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  // Obtener estilo de prioridad
  const getPriorityStyle = (priority) => {
    return priorities[priority] || priorities.low;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-6 rounded-b-3xl shadow-lg sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Mis Tareas</h1>
        <div className="flex gap-4 mt-3 text-sm">
          <div className="bg-white/20 rounded-lg px-3 py-1">
            <span className="font-semibold">{pendingCount}</span> pendientes
          </div>
          <div className="bg-white/20 rounded-lg px-3 py-1">
            <span className="font-semibold">{completedCount}</span> completadas
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-sm sticky top-[120px] z-10">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('today')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'today'
                ? 'border-b-2 border-primary text-primary bg-primary/5'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Hoy
          </button>
          <button
            onClick={() => setActiveTab('week')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'week'
                ? 'border-b-2 border-primary text-primary bg-primary/5'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Esta semana
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'border-b-2 border-primary text-primary bg-primary/5'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Todas
          </button>
        </div>

        {/* Filtro de completadas */}
        <div className="px-4 py-3 border-b border-gray-100">
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"
          >
            <Filter className="w-4 h-4 mr-2" />
            {showCompleted ? 'Ocultar completadas' : 'Mostrar completadas'}
          </button>
        </div>
      </div>

      {/* Lista de tareas */}
      <div className="px-4 py-4 space-y-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => {
            const priorityStyle = getPriorityStyle(task.priority);
            return (
              <div
                key={task.id}
                className={`bg-white rounded-xl shadow-sm p-4 border-l-4 ${
                  task.completed ? 'opacity-60 bg-gray-50' : ''
                } ${priorityStyle.borderColor} transition-all`}
              >
                <div className="flex items-start gap-3">
                  {/* Checkbox */}
                  <button
                    onClick={() => onToggleTask(task.id)}
                    className="flex-shrink-0 mt-1 focus:outline-none"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300 hover:text-primary transition-colors" />
                    )}
                  </button>

                  {/* Contenido de la tarea */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-medium text-gray-800 ${
                        task.completed ? 'line-through text-gray-500' : ''
                      }`}
                    >
                      {task.title}
                    </h3>

                    {/* Fecha y hora */}
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <span>
                        {new Date(task.dueDate).toLocaleDateString('es-ES', {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                        })}{' '}
                        · {task.dueTime}
                      </span>
                    </div>

                    {/* Badge de prioridad */}
                    <div className="mt-2">
                      <span
                        className={`inline-block ${priorityStyle.color} ${priorityStyle.textColor} px-2 py-1 rounded text-xs font-medium`}
                      >
                        {priorityStyle.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="text-gray-400 mb-2">
              <CheckCircle2 className="w-12 h-12 mx-auto opacity-50" />
            </div>
            <p className="text-gray-600 font-medium">No hay tareas en esta categoría</p>
            <p className="text-sm text-gray-500 mt-1">
              {activeTab === 'today' && 'No tienes tareas para hoy'}
              {activeTab === 'week' && 'No tienes tareas para esta semana'}
              {activeTab === 'all' && 'Aún no has creado tareas'}
            </p>
          </div>
        )}
      </div>

      {/* Botón flotante para agregar tarea */}
      <button
        className="fixed bottom-24 right-6 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all active:scale-95 z-20"
        aria-label="Nueva tarea"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TaskList;
