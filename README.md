# TimeFlow - Aplicación de Gestión de Tiempo

**TimeFlow** es una aplicación web móvil diseñada para estudiantes universitarios y técnicos entre 20-35 años que trabajan y estudian simultáneamente, ayudándoles a organizar eficientemente su tiempo entre estudios, trabajo y vida personal.

## Propuesta de Valor

Ayudamos a estudiantes que trabajan a organizar su tiempo de manera simple y efectiva mediante sincronización automática de horarios, recordatorios inteligentes y visualización clara de bloques de tiempo, eliminando el estrés por acumulación de tareas y olvidos de compromisos importantes.

## Funcionalidades Principales

### 1. Calendario Inteligente Semanal
- Vista visual de bloques de tiempo por día
- Código de colores por tipo de actividad:
  - 🔵 Clases (azul)
  - 🟣 Trabajo (violeta)
  - 🟢 Estudio personal (verde)
  - 🟡 Vida personal (amarillo)
- Vista completa de la semana de un vistazo

### 2. Gestor de Tareas con Prioridades
- Lista de tareas organizadas por urgencia (alta, media, baja)
- Checkbox para marcar como completadas
- Contador de tareas pendientes y completadas
- Filtros por: Hoy, Esta semana, Todas
- Opción de mostrar/ocultar completadas

### 3. Dashboard (Inicio)
- Saludo personalizado
- Resumen del día actual con fecha
- Visualización de próxima actividad importante con tiempo restante
- Contador de tareas pendientes y completadas
- Tareas prioritarias destacadas
- Accesos rápidos a funciones principales

## Tecnologías Utilizadas

- **React 18** - Framework principal
- **Tailwind CSS** - Estilos y diseño responsive
- **Lucide React** - Iconos modernos
- **React Hooks** - Manejo de estado (useState)

## Instalación y Ejecución

### Requisitos previos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para instalar

1. Clonar o descargar el proyecto
2. Navegar a la carpeta del proyecto:
   ```bash
   cd PMV
   ```

3. Instalar dependencias:
   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:
   ```bash
   npm start
   ```

5. Abrir el navegador en: `http://localhost:3000`

## Estructura del Proyecto

```
PMV/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js          # Pantalla de inicio
│   │   ├── WeeklyCalendar.js     # Calendario semanal
│   │   ├── TaskList.js           # Lista de tareas
│   │   └── BottomNav.js          # Navegación inferior
│   ├── data/
│   │   └── mockData.js           # Datos de ejemplo (Camila)
│   ├── App.js                    # Componente principal
│   ├── index.js                  # Punto de entrada
│   └── index.css                 # Estilos globales
├── package.json
├── tailwind.config.js
└── README.md
```

## Usuario de Ejemplo

La aplicación incluye datos mock de **Camila**:
- 30 años
- Estudia Ingeniería en Informática
- Trabaja tiempo completo
- Horario completo de la semana con clases, trabajo y actividades personales
- 5 tareas de ejemplo con diferentes prioridades

## Diseño y Experiencia de Usuario

### Paleta de Colores
- **Primario**: Azul suave/violeta (#6366f1) - calma y profesionalismo
- **Secundario**: Verde menta (#10b981) - completado/éxito
- **Acento**: Naranja (#f59e0b) - urgente
- **Fondo**: Gris muy claro (#f9fafb)
- **Texto**: Gris oscuro (#1f2937)

### Principios de Diseño
- **Mobile-first**: Optimizado para dispositivos móviles (320px - 428px)
- **Minimalista**: Diseño limpio y sin elementos innecesarios
- **Intuitivo**: Navegación simple y clara
- **Youth-friendly**: Moderno y atractivo para jóvenes adultos

## Navegación

La aplicación cuenta con 3 pantallas principales accesibles desde la barra de navegación inferior:

1. **🏠 Inicio**: Dashboard con resumen del día y próximas actividades
2. **📅 Calendario**: Vista semanal de todas las actividades
3. **✓ Tareas**: Gestión completa de tareas pendientes

## Capturas de Pantalla

Esta aplicación está lista para:
- ✅ Capturar screenshots para redes sociales
- ✅ Pruebas en vivo con usuarios potenciales
- ✅ Validación mediante métricas de engagement

## PMV (Producto Mínimo Viable)

El objetivo de este PMV es demostrar claramente cómo la app resuelve el problema de gestión de tiempo de estudiantes que trabajan, de manera simple e intuitiva.

### Funcionalidades del MVP
- ✅ Visualización de calendario semanal
- ✅ Gestión de tareas con prioridades
- ✅ Dashboard con información relevante
- ✅ Navegación fluida entre secciones
- ✅ Diseño responsive y atractivo
- ✅ Datos de ejemplo realistas

### No incluido en este MVP
- ❌ Persistencia de datos (localStorage/sessionStorage)
- ❌ Autenticación de usuarios
- ❌ Sincronización con calendarios externos
- ❌ Notificaciones push del navegador
- ❌ Backend o base de datos
- ❌ Formularios para agregar/editar actividades

## Próximos Pasos (Futuras Versiones)

1. Implementar formularios para agregar/editar tareas y actividades
2. Agregar persistencia local de datos
3. Sistema de notificaciones push
4. Integración con Google Calendar
5. Detección de nivel de estrés y sugerencias de pausas
6. Estadísticas y reportes de productividad
7. Personalización de temas y colores

## Licencia

Este es un proyecto de Producto Mínimo Viable (PMV) con fines educativos y de validación.

## Contacto

Para más información sobre este PMV, contactar al equipo de desarrollo.

---

**TimeFlow** - Organiza tu tiempo, reduce tu estrés ✨
