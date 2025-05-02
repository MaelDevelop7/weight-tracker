// src/components/MotivationalMessage.tsx

import React from 'react';

const messages = [
  "Chaque petit pas compte 💪",
  "Continue comme ça, tu es sur la bonne voie ! 🌟",
  "N'oublie pas pourquoi tu as commencé 💖",
  "La constance est la clé 🔑",
  "Ton futur toi te remercie déjà 🙌",
  "Une journée à la fois ✨",
  "Tu es plus forte que tu ne le penses 💥",
];

const MotivationalMessage: React.FC = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  return (
    <div style={containerStyle}>
      <p style={textStyle}>💬 {message}</p>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  marginTop: '2rem',
  padding: '1rem',
  backgroundColor: '#e3f2fd',
  borderRadius: '8px',
  border: '1px solid #90caf9',
};

const textStyle: React.CSSProperties = {
  fontStyle: 'italic',
  fontSize: '1.1rem',
  color: '#1565c0',
};

export default MotivationalMessage;
