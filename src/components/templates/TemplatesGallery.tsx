import React, { useState, useMemo } from 'react';
import TemplateCard, { Template } from './TemplateCard';
import '../../styles/TemplatesGallery.css';

const templates: Template[] = [
  // Apps
  {
    id: 'app-1',
    title: 'Social Media App',
    description: 'Aplicación de red social completa con feed, comentarios y mensajes',
    category: 'Apps',
    difficulty: 'Difícil',
    buildTime: '8-10 horas',
  },
  {
    id: 'app-2',
    title: 'Todo List App',
    description: 'Gestor de tareas con categorías, recordatorios y sincronización',
    category: 'Apps',
    difficulty: 'Fácil',
    buildTime: '2-3 horas',
  },
  {
    id: 'app-3',
    title: 'Weather App',
    description: 'Aplicación meteorológica con pronósticos y alertas',
    category: 'Apps',
    difficulty: 'Medio',
    buildTime: '4-5 horas',
  },

  // Landing Pages
  {
    id: 'landing-1',
    title: 'SaaS Landing Page',
    description: 'Página de inicio profesional para productos SaaS con CTA',
    category: 'Landing Pages',
    difficulty: 'Fácil',
    buildTime: '2-3 horas',
  },
  {
    id: 'landing-2',
    title: 'Startup Landing Page',
    description: 'Landing page moderna para startups con secciones de características',
    category: 'Landing Pages',
    difficulty: 'Fácil',
    buildTime: '3-4 horas',
  },
  {
    id: 'landing-3',
    title: 'Product Launch Page',
    description: 'Página de lanzamiento de producto con formulario y countdown',
    category: 'Landing Pages',
    difficulty: 'Medio',
    buildTime: '3-4 horas',
  },

  // SaaS
  {
    id: 'saas-1',
    title: 'Project Management Tool',
    description: 'Herramienta de gestión de proyectos con tableros kanban',
    category: 'SaaS',
    difficulty: 'Difícil',
    buildTime: '12-15 horas',
  },
  {
    id: 'saas-2',
    title: 'Analytics Dashboard',
    description: 'Dashboard analítico con gráficos y métricas en tiempo real',
    category: 'SaaS',
    difficulty: 'Medio',
    buildTime: '6-8 horas',
  },
  {
    id: 'saas-3',
    title: 'Collaboration Platform',
    description: 'Plataforma colaborativa con chat, archivos y videollamadas',
    category: 'SaaS',
    difficulty: 'Difícil',
    buildTime: '15-20 horas',
  },

  // CRM
  {
    id: 'crm-1',
    title: 'Basic CRM',
    description: 'Sistema CRM básico para gestionar contactos y oportunidades',
    category: 'CRM',
    difficulty: 'Medio',
    buildTime: '8-10 horas',
  },
  {
    id: 'crm-2',
    title: 'Sales Pipeline CRM',
    description: 'CRM especializado en gestión de pipeline de ventas',
    category: 'CRM',
    difficulty: 'Medio',
    buildTime: '10-12 horas',
  },
  {
    id: 'crm-3',
    title: 'Customer Portal',
    description: 'Portal de cliente para CRM con ticket management',
    category: 'CRM',
    difficulty: 'Difícil',
    buildTime: '12-14 horas',
  },

  // ERP
  {
    id: 'erp-1',
    title: 'Inventory Management',
    description: 'Sistema de gestión de inventario con stock tracking',
    category: 'ERP',
    difficulty: 'Medio',
    buildTime: '10-12 horas',
  },
  {
    id: 'erp-2',
    title: 'Supply Chain System',
    description: 'Sistema de cadena de suministro con múltiples almacenes',
    category: 'ERP',
    difficulty: 'Difícil',
    buildTime: '15-18 horas',
  },
  {
    id: 'erp-3',
    title: 'HR Management System',
    description: 'Sistema de gestión de recursos humanos completo',
    category: 'ERP',
    difficulty: 'Difícil',
    buildTime: '16-20 horas',
  },

  // Marketplace
  {
    id: 'marketplace-1',
    title: 'Freelance Marketplace',
    description: 'Marketplace para freelancers con sistema de calificación',
    category: 'Marketplace',
    difficulty: 'Difícil',
    buildTime: '18-20 horas',
  },
  {
    id: 'marketplace-2',
    title: 'Service Marketplace',
    description: 'Marketplace de servicios con búsqueda y reservas',
    category: 'Marketplace',
    difficulty: 'Difícil',
    buildTime: '16-18 horas',
  },
  {
    id: 'marketplace-3',
    title: 'Digital Products Store',
    description: 'Marketplace de productos digitales con DRM',
    category: 'Marketplace',
    difficulty: 'Medio',
    buildTime: '10-12 horas',
  },

  // Ecommerce
  {
    id: 'ecommerce-1',
    title: 'Fashion Store',
    description: 'Tienda de moda con filtros avanzados y recomendaciones',
    category: 'Ecommerce',
    difficulty: 'Medio',
    buildTime: '8-10 horas',
  },
  {
    id: 'ecommerce-2',
    title: 'Electronics Shop',
    description: 'Tienda de electrónica con comparación de productos',
    category: 'Ecommerce',
    difficulty: 'Medio',
    buildTime: '9-11 horas',
  },
  {
    id: 'ecommerce-3',
    title: 'Subscription Shop',
    description: 'Tienda con modelo de suscripción recurrente',
    category: 'Ecommerce',
    difficulty: 'Difícil',
    buildTime: '12-14 horas',
  },

  // Dashboard
  {
    id: 'dashboard-1',
    title: 'Business Intelligence Dashboard',
    description: 'Dashboard de inteligencia empresarial con KPIs',
    category: 'Dashboard',
    difficulty: 'Medio',
    buildTime: '8-10 horas',
  },
  {
    id: 'dashboard-2',
    title: 'Financial Dashboard',
    description: 'Dashboard financiero con gráficos y reportes',
    category: 'Dashboard',
    difficulty: 'Medio',
    buildTime: '10-12 horas',
  },
  {
    id: 'dashboard-3',
    title: 'Admin Panel',
    description: 'Panel de administración con gestión de usuarios y permisos',
    category: 'Dashboard',
    difficulty: 'Medio',
    buildTime: '8-10 horas',
  },

  // Blogs
  {
    id: 'blog-1',
    title: 'Tech Blog',
    description: 'Blog tecnológico con categorías y etiquetas',
    category: 'Blogs',
    difficulty: 'Fácil',
    buildTime: '3-4 horas',
  },
  {
    id: 'blog-2',
    title: 'Business Blog',
    description: 'Blog empresarial con newsletter y comentarios',
    category: 'Blogs',
    difficulty: 'Medio',
    buildTime: '4-6 horas',
  },
  {
    id: 'blog-3',
    title: 'Multi-Author Blog',
    description: 'Blog multi-autor con roles y permisos',
    category: 'Blogs',
    difficulty: 'Medio',
    buildTime: '6-8 horas',
  },

  // Portfolios
  {
    id: 'portfolio-1',
    title: 'Designer Portfolio',
    description: 'Portfolio de diseñador con galería de proyectos',
    category: 'Portfolios',
    difficulty: 'Fácil',
    buildTime: '3-4 horas',
  },
  {
    id: 'portfolio-2',
    title: 'Developer Portfolio',
    description: 'Portfolio de desarrollador con proyectos y skills',
    category: 'Portfolios',
    difficulty: 'Fácil',
    buildTime: '2-3 horas',
  },
  {
    id: 'portfolio-3',
    title: 'Creative Agency Portfolio',
    description: 'Portfolio de agencia creativa con casos de estudio',
    category: 'Portfolios',
    difficulty: 'Medio',
    buildTime: '5-7 horas',
  },

  // WordPress
  {
    id: 'wordpress-1',
    title: 'WP Corporate Site',
    description: 'Sitio corporativo WordPress con plugins esenciales',
    category: 'WordPress',
    difficulty: 'Fácil',
    buildTime: '4-6 horas',
  },
  {
    id: 'wordpress-2',
    title: 'WP E-Learning',
    description: 'Plataforma de e-learning con WordPress y LMS',
    category: 'WordPress',
    difficulty: 'Medio',
    buildTime: '8-10 horas',
  },
  {
    id: 'wordpress-3',
    title: 'WP Membership Site',
    description: 'Sitio de membresía con acceso restringido',
    category: 'WordPress',
    difficulty: 'Medio',
    buildTime: '7-9 horas',
  },

  // Automations
  {
    id: 'automation-1',
    title: 'Email Marketing Automation',
    description: 'Automatización de email marketing con flujos',
    category: 'Automations',
    difficulty: 'Medio',
    buildTime: '6-8 horas',
  },
  {
    id: 'automation-2',
    title: 'Lead Scoring Automation',
    description: 'Sistema de calificación de leads automático',
    category: 'Automations',
    difficulty: 'Medio',
    buildTime: '5-7 horas',
  },
  {
    id: 'automation-3',
    title: 'Workflow Automation',
    description: 'Automatización de flujos de trabajo complejos',
    category: 'Automations',
    difficulty: 'Difícil',
    buildTime: '10-12 horas',
  },

  // AI Agents
  {
    id: 'ai-1',
    title: 'Chatbot Assistant',
    description: 'Asistente de chat con IA para soporte al cliente',
    category: 'AI Agents',
    difficulty: 'Medio',
    buildTime: '6-8 horas',
  },
  {
    id: 'ai-2',
    title: 'Content Generator',
    description: 'Generador de contenido con IA para marketing',
    category: 'AI Agents',
    difficulty: 'Medio',
    buildTime: '7-9 horas',
  },
  {
    id: 'ai-3',
    title: 'Recommendation Engine',
    description: 'Motor de recomendaciones con machine learning',
    category: 'AI Agents',
    difficulty: 'Difícil',
    buildTime: '12-14 horas',
  },
];

const categories = [
  'Todas',
  'Apps',
  'Landing Pages',
  'SaaS',
  'CRM',
  'ERP',
  'Marketplace',
  'Ecommerce',
  'Dashboard',
  'Blogs',
  'Portfolios',
  'WordPress',
  'Automations',
  'AI Agents',
];

const sortOptions = [
  { value: 'newest', label: 'Más Reciente' },
  { value: 'alphabetical', label: 'Alfabético' },
  { value: 'difficulty-easy', label: 'Más Fácil' },
  { value: 'difficulty-hard', label: 'Más Difícil' },
];

interface TemplatesGalleryProps {
  onTemplateSelected?: (template: Template) => void;
}

export const TemplatesGallery: React.FC<TemplatesGalleryProps> = ({
  onTemplateSelected,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSortedTemplates = useMemo(() => {
    let filtered = templates;

    // Filter by category
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter((t) => t.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query)
      );
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'alphabetical':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'difficulty-easy':
        const difficultyOrder = { Fácil: 0, Medio: 1, Difícil: 2 };
        sorted.sort(
          (a, b) =>
            (difficultyOrder[a.difficulty] || 0) -
            (difficultyOrder[b.difficulty] || 0)
        );
        break;
      case 'difficulty-hard':
        const difficultyOrderHard = { Difícil: 0, Medio: 1, Fácil: 2 };
        sorted.sort(
          (a, b) =>
            (difficultyOrderHard[a.difficulty] || 0) -
            (difficultyOrderHard[b.difficulty] || 0)
        );
        break;
      case 'newest':
      default:
        // Keep original order
        break;
    }

    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleUseTemplate = (template: Template) => {
    console.log(`Template selected: ${template.title}`);
    if (onTemplateSelected) {
      onTemplateSelected(template);
    }
  };

  return (
    <div className="templates-gallery">
      <div className="gallery-header">
        <h1 className="gallery-title">Galería de Templates</h1>
        <p className="gallery-subtitle">
          Elige un template para comenzar tu proyecto
        </p>
      </div>

      <div className="gallery-controls">
        <div className="search-container">
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="controls-right">
          <div className="sort-container">
            <label htmlFor="sort-select" className="sort-label">
              Ordenar:
            </label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="filter-chips">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredAndSortedTemplates.length > 0 ? (
        <>
          <div className="results-count">
            {filteredAndSortedTemplates.length} template
            {filteredAndSortedTemplates.length !== 1 ? 's' : ''} encontrado
            {filteredAndSortedTemplates.length !== 1 ? 's' : ''}
          </div>
          <div className="templates-grid">
            {filteredAndSortedTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onUseTemplate={handleUseTemplate}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="no-results">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <h3>No hay templates que coincidan</h3>
          <p>Intenta con otros términos de búsqueda o filtros</p>
        </div>
      )}
    </div>
  );
};

export default TemplatesGallery;