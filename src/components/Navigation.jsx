import { NavLink } from 'react-router-dom';
import { BookOpen, CheckSquare, Map } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/flashcards" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <BookOpen size={20} />
        <span>Flashcards</span>
      </NavLink>
      <NavLink to="/mcq" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <CheckSquare size={20} />
        <span>QCM</span>
      </NavLink>
      <NavLink to="/maps" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <Map size={20} />
        <span>Cartes</span>
      </NavLink>
    </nav>
  );
}
