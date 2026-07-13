import React, { useState } from 'react';
import '../styles/NewProjectWizard.css';

interface ProjectCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const projectCards: ProjectCard[] = [
  {
    id: 'mobile-app',
    icon: '📱',
    title: 'App Móvil',
    description: 'Crea aplicaciones móviles nativas',
  },
  {
    id: 'landing-page',
    icon: '🌐',
    title: 'Landing Page',
    description: 'Página de presentación profesional',
  },
  {
    id: 'saas',
    icon: '☁',
    title: 'SaaS',
    description: 'Software como servicio escalable',
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'Ecommerce',
    description: 'Tienda en línea completa',
  },
  {
    id: 'dashboard',
    icon: '📊',
    title: 'Dashboard',
    description: 'Panel de análisis y métricas',
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'IA',
    description: 'Integración de inteligencia artificial',
  },
  {
    id: 'empty-project',
    icon: '⚙',
    title: 'Proyecto Vacío',
    description: 'Comienza desde cero',
  },
];

export const NewProjectWizard: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (cardId: string) => {
    setSelectedCard(cardId);
  };

  const handleContinue = () => {
    if (selectedCard) {
      console.log(`Selected project: ${selectedCard}`);
      // Handle continue action here
    }
  };

  return (
    <div className="new-project-wizard">
      <div className="wizard-container">
        <h1 className="wizard-title">¿Qué quieres construir hoy?</h1>
        
        <div className="cards-grid">
          {projectCards.map((card) => (
            <div
              key={card.id}
              className={`project-card ${selectedCard === card.id ? 'selected' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>

        <button
          className="continue-button"
          onClick={handleContinue}
          disabled={!selectedCard}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default NewProjectWizard;
