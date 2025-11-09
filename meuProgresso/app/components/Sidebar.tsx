import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { 
  LuChevronLeft,
  LuChevronRight,
  LuLayoutDashboard, 
  LuDumbbell,
  LuClipboardCheck, 
  LuBookOpenCheck,
  LuCode,
  LuChurch
} from 'react-icons/lu';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <aside className="sidebar">
      <button className="sidebar-toggle" onClick={onToggle}>
        {isOpen ? <LuChevronLeft size={20} /> : <LuChevronRight size={20} />}
      </button>

      <div className="sidebar-header">
        <h1 className="sidebar-logo">
          {isOpen ? "MeuProgresso" : "MP"}
        </h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/home">
              <LuLayoutDashboard size={20} />
              {isOpen && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/treino">
              <LuDumbbell size={20} />
              {isOpen && <span>Treino</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dieta">
              <LuClipboardCheck size={20} />
              {isOpen && <span>Dieta</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/concurso">
              <LuBookOpenCheck size={20} />
              {isOpen && <span>Concurso</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/programacao">
              <LuCode size={20} />
              {isOpen && <span>Programação</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/espiritual">
              <LuChurch size={20} />
              {isOpen && <span>Espiritual</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}