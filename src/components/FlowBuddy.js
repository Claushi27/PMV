import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const FlowBuddy = ({ userName, stressLevel }) => {
  const [selectedPet, setSelectedPet] = useState('cat'); // cat, dog, bear, fox

  // Obtener hora actual para mensajes contextuales
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  };

  const timeOfDay = getTimeOfDay();

  // Emojis de mascotas
  const pets = {
    cat: { emoji: '🐱', name: 'Flow' },
    dog: { emoji: '🐶', name: 'Flow' },
    bear: { emoji: '🐻', name: 'Flow' },
    fox: { emoji: '🦊', name: 'Flow' },
  };

  // Mensajes según hora del día y estado de estrés
  const getGreeting = () => {
    const greetings = {
      morning: [
        `¡Buenos días, ${userName}! 🌅`,
        `¡Hola ${userName}! Hoy será un gran día 🌟`,
        `Buenos días 🌞 ¿Lista para lograr tus metas?`,
      ],
      afternoon: [
        `¡Buenas tardes, ${userName}! 🌤️`,
        `¡Hola ${userName}! ¿Cómo va tu día? 💫`,
        `Buenas tardes 🌻 Vas muy bien`,
      ],
      evening: [
        `¡Buenas noches, ${userName}! 🌙`,
        `¡Hola ${userName}! Ya casi terminas el día 🌆`,
        `Buenas noches ✨ Has trabajado duro`,
      ],
    };

    const timeGreetings = greetings[timeOfDay] || greetings.morning;
    return timeGreetings[Math.floor(Math.random() * timeGreetings.length)];
  };

  // Mensajes motivacionales según nivel de estrés
  const getMotivationalMessage = () => {
    const messages = {
      low: [
        '¡Vas excelente! Sigue así 🎯',
        'Todo bajo control, lo estás haciendo genial 💪',
        'Mantienes un ritmo perfecto 🌟',
        'Tu organización es inspiradora ✨',
      ],
      medium: [
        'Respira profundo, lo estás manejando bien 🌊',
        'Vas a un buen ritmo, recuerda tus pausas 💙',
        'Estás haciendo un gran trabajo 💫',
        'Un paso a la vez, vas muy bien 🚶‍♀️',
      ],
      high: [
        'Hey, necesitas un descanso pronto 🛑',
        'Tómate un momento para ti, lo mereces 🌸',
        'Respira... Todo va a estar bien 🌈',
        'Es momento de bajar la velocidad 🧘‍♀️',
      ],
    };

    const levelMessages = messages[stressLevel] || messages.low;
    return levelMessages[Math.floor(Math.random() * levelMessages.length)];
  };

  // Mini tips rotativos de bienestar
  const wellnessTips = [
    { icon: '💧', text: 'Toma agua', detail: 'Mantente hidratado', color: 'bg-blue-50 text-blue-700' },
    { icon: '👀', text: 'Descansa la vista', detail: 'Mira algo lejos por 20 segundos', color: 'bg-green-50 text-green-700' },
    { icon: '🧘', text: 'Respira profundo', detail: '3 respiraciones conscientes', color: 'bg-purple-50 text-purple-700' },
    { icon: '🚶', text: 'Estira tu cuerpo', detail: 'Levántate y muévete 30 segundos', color: 'bg-orange-50 text-orange-700' },
    { icon: '😊', text: 'Sonríe', detail: 'Aunque sea forzado, ayuda', color: 'bg-pink-50 text-pink-700' },
  ];

  // Obtener tip del día (basado en la hora para que cambie)
  const getCurrentTip = () => {
    const hour = new Date().getHours();
    return wellnessTips[hour % wellnessTips.length];
  };

  const currentTip = getCurrentTip();
  const currentPet = pets[selectedPet];

  return (
    <div className="px-6 py-4">
      {/* Tarjeta Principal de Flow */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg p-5 border-2 border-purple-200">
        {/* Selector de Mascota (pequeño, arriba a la derecha) */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
            <span className="text-sm font-semibold text-purple-700">Tu compañero</span>
          </div>
          <div className="flex gap-1">
            {Object.entries(pets).map(([key, pet]) => (
              <button
                key={key}
                onClick={() => setSelectedPet(key)}
                className={`text-2xl transition-all ${
                  selectedPet === key ? 'scale-110 drop-shadow-lg' : 'opacity-40 scale-90'
                }`}
              >
                {pet.emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Mascota y Mensaje Principal */}
        <div className="flex items-start gap-4">
          {/* Mascota animada */}
          <div className="text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
            {currentPet.emoji}
          </div>

          {/* Mensajes */}
          <div className="flex-1">
            <div className="bg-white rounded-xl p-4 shadow-sm mb-2 relative">
              {/* Piquito de bocadillo */}
              <div className="absolute left-0 top-4 -ml-2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>

              <p className="text-sm font-semibold text-gray-800 mb-1">{getGreeting()}</p>
              <p className="text-sm text-gray-600">{getMotivationalMessage()}</p>
            </div>

            {/* Mini Tip del Momento */}
            <div className={`${currentTip.color} rounded-lg p-3 flex items-center gap-2`}>
              <span className="text-2xl">{currentTip.icon}</span>
              <div className="flex-1">
                <p className="text-xs font-bold">{currentTip.text}</p>
                <p className="text-xs opacity-80">{currentTip.detail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de Flow según nivel de estrés */}
        <div className="mt-3 pt-3 border-t border-purple-200">
          <p className="text-xs text-center text-purple-600 font-medium">
            {stressLevel === 'low' && '✨ Sigue así, estás en control total'}
            {stressLevel === 'medium' && '💙 Vas bien, recuerda cuidarte en el camino'}
            {stressLevel === 'high' && '🌸 Tu bienestar es prioridad, tómate un break'}
          </p>
        </div>
      </div>

      {/* Mini recordatorios adicionales (solo si nivel medio o alto) */}
      {(stressLevel === 'medium' || stressLevel === 'high') && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="bg-white rounded-lg p-2 text-center shadow-sm">
            <div className="text-xl">💧</div>
            <p className="text-xs text-gray-600 font-medium mt-1">Hidratación</p>
          </div>
          <div className="bg-white rounded-lg p-2 text-center shadow-sm">
            <div className="text-xl">🌬️</div>
            <p className="text-xs text-gray-600 font-medium mt-1">Respirar</p>
          </div>
          <div className="bg-white rounded-lg p-2 text-center shadow-sm">
            <div className="text-xl">🚶</div>
            <p className="text-xs text-gray-600 font-medium mt-1">Moverse</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowBuddy;
