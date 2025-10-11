// Datos mock para Camila - estudiante de 30 años que trabaja y estudia

export const userData = {
  name: "Camila",
  age: 30,
  career: "Ingeniería en Informática"
};

// Actividades de la semana
export const weekActivities = [
  // Lunes
  { id: 1, day: 'Lunes', title: 'Trabajo', startTime: '09:00', endTime: '18:00', type: 'work', date: '2025-10-13' },
  { id: 2, day: 'Lunes', title: 'Clase Ingeniería', startTime: '19:00', endTime: '22:00', type: 'class', date: '2025-10-13' },

  // Martes
  { id: 3, day: 'Martes', title: 'Trabajo', startTime: '09:00', endTime: '18:00', type: 'work', date: '2025-10-14' },
  { id: 4, day: 'Martes', title: 'Estudio personal', startTime: '20:00', endTime: '22:00', type: 'study', date: '2025-10-14' },

  // Miércoles
  { id: 5, day: 'Miércoles', title: 'Trabajo', startTime: '09:00', endTime: '18:00', type: 'work', date: '2025-10-15' },
  { id: 6, day: 'Miércoles', title: 'Clase', startTime: '19:00', endTime: '22:00', type: 'class', date: '2025-10-15' },

  // Jueves
  { id: 7, day: 'Jueves', title: 'Trabajo', startTime: '09:00', endTime: '14:00', type: 'work', date: '2025-10-16' },
  { id: 8, day: 'Jueves', title: 'Médico', startTime: '15:00', endTime: '16:00', type: 'personal', date: '2025-10-16' },
  { id: 9, day: 'Jueves', title: 'Estudio', startTime: '20:00', endTime: '22:00', type: 'study', date: '2025-10-16' },

  // Viernes
  { id: 10, day: 'Viernes', title: 'Trabajo', startTime: '09:00', endTime: '18:00', type: 'work', date: '2025-10-17' },
  { id: 11, day: 'Viernes', title: 'Tiempo libre', startTime: '19:00', endTime: '21:00', type: 'personal', date: '2025-10-17' },

  // Sábado
  { id: 12, day: 'Sábado', title: 'Estudio proyecto', startTime: '10:00', endTime: '14:00', type: 'study', date: '2025-10-18' },

  // Domingo
  { id: 13, day: 'Domingo', title: 'Descanso', startTime: '11:00', endTime: '13:00', type: 'personal', date: '2025-10-19' },
];

// Tipos de actividades con sus colores
export const activityTypes = {
  class: { label: '🔵 Clases', color: 'bg-blue-500', textColor: 'text-blue-700', bgLight: 'bg-blue-100' },
  work: { label: '🟣 Trabajo', color: 'bg-purple-500', textColor: 'text-purple-700', bgLight: 'bg-purple-100' },
  study: { label: '🟢 Estudio personal', color: 'bg-green-500', textColor: 'text-green-700', bgLight: 'bg-green-100' },
  personal: { label: '🟡 Vida personal', color: 'bg-yellow-500', textColor: 'text-yellow-700', bgLight: 'bg-yellow-100' },
};

// Tareas iniciales
export const initialTasks = [
  {
    id: 1,
    title: 'Entregar proyecto programación',
    priority: 'high',
    dueDate: '2025-10-17',
    dueTime: '23:59',
    completed: false,
    category: 'academic'
  },
  {
    id: 2,
    title: 'Leer capítulos 3-4 para clase',
    priority: 'medium',
    dueDate: '2025-10-15',
    dueTime: '19:00',
    completed: false,
    category: 'academic'
  },
  {
    id: 3,
    title: 'Responder email profesor',
    priority: 'low',
    dueDate: '2025-10-18',
    dueTime: '12:00',
    completed: false,
    category: 'academic'
  },
  {
    id: 4,
    title: 'Estudiar para quiz matemáticas',
    priority: 'high',
    dueDate: '2025-10-11',
    dueTime: '08:00',
    completed: true,
    category: 'academic'
  },
  {
    id: 5,
    title: 'Revisar informe mensual trabajo',
    priority: 'medium',
    dueDate: '2025-10-16',
    dueTime: '17:00',
    completed: false,
    category: 'work'
  }
];

// Prioridades
export const priorities = {
  high: { label: 'Alta', color: 'bg-red-100', textColor: 'text-red-700', borderColor: 'border-red-300' },
  medium: { label: 'Media', color: 'bg-orange-100', textColor: 'text-orange-700', borderColor: 'border-orange-300' },
  low: { label: 'Baja', color: 'bg-green-100', textColor: 'text-green-700', borderColor: 'border-green-300' },
};

// Días de la semana
export const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
