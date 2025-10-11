import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import WeeklyCalendar from './components/WeeklyCalendar';
import TaskList from './components/TaskList';
import BottomNav from './components/BottomNav';
import { userData, weekActivities, initialTasks } from './data/mockData';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [tasks, setTasks] = useState(initialTasks);

  // Función para cambiar de vista
  const handleNavigate = (view) => {
    setActiveView(view);
    // Scroll to top cuando cambia la vista
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para marcar/desmarcar tarea como completada
  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Renderizar vista activa
  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return (
          <Dashboard
            userData={userData}
            tasks={tasks}
            activities={weekActivities}
            onNavigate={handleNavigate}
          />
        );
      case 'calendar':
        return <WeeklyCalendar activities={weekActivities} />;
      case 'tasks':
        return <TaskList tasks={tasks} onToggleTask={handleToggleTask} />;
      default:
        return (
          <Dashboard
            userData={userData}
            tasks={tasks}
            activities={weekActivities}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderActiveView()}
      <BottomNav activeView={activeView} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
