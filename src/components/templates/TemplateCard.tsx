import React from 'react';

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  buildTime: string;
  image?: string;
}

interface TemplateCardProps {
  template: Template;
  onUseTemplate: (template: Template) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onUseTemplate,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'easy';
      case 'Medio':
        return 'medium';
      case 'Difícil':
        return 'hard';
      default:
        return 'medium';
    }
  };

  return (
    <div className="template-card">
      <div className="card-image-container">
        <div className="card-image-placeholder">
          <svg
            viewBox="0 0 300 200"
            xmlns="http://www.w3.org/2000/svg"
            className="placeholder-svg"
          >
            <rect width="300" height="200" fill="#2a2a3e" />
            <rect x="20" y="20" width="260" height="160" fill="#3a3a50" />
            <circle cx="150" cy="80" r="30" fill="#667eea" opacity="0.3" />
            <rect x="50" y="120" width="200" height="8" fill="#667eea" opacity="0.2" />
            <rect x="50" y="135" width="150" height="6" fill="#667eea" opacity="0.15" />
          </svg>
        </div>
        <div className="card-overlay">
          <button
            className="use-template-btn"
            onClick={() => onUseTemplate(template)}
          >
            Usar Template
          </button>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{template.title}</h3>
        <p className="card-description">{template.description}</p>

        <div className="card-meta">
          <div className="meta-item">
            <span className={`difficulty-badge ${getDifficultyColor(template.difficulty)}`}>
              {template.difficulty}
            </span>
          </div>
          <div className="meta-item">
            <span className="build-time">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {template.buildTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
