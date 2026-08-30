import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomSelect({ value, onChange, options, placeholder = 'Sélectionner', ariaLabel, className = '' }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef(null);
  const selected = options.find(o => String(o.value) === String(value));
  const selectedIndex = options.findIndex(o => String(o.value) === String(value));

  // sync activeIndex when opening without cascading effect warning
  const syncActive = (nextOpen) => {
    if (nextOpen) setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  };

  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => { document.removeEventListener('mousedown', onDoc); };
  }, []);

  const handleTriggerKey = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      syncActive(true);
      setOpen(true);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleOptionKey = (e, idx) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, options.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange(options[idx].value); setOpen(false); }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
    else if (e.key === 'Home') { e.preventDefault(); setActiveIndex(0); }
    else if (e.key === 'End') { e.preventDefault(); setActiveIndex(options.length - 1); }
  };

  return (
    <div ref={ref} className={`custom-select ${className} ${open ? 'open' : ''}`} >
      <button
        type="button"
        className="custom-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => { const n = !open; syncActive(n); setOpen(n); }}
        onKeyDown={handleTriggerKey}
      >
        <span className="custom-select-value">{selected ? selected.label : placeholder}</span>
        <span className="custom-select-chevron" aria-hidden><ChevronDown size={14} /></span>
      </button>
      {open && (
        <div className="custom-select-panel" role="listbox" aria-label={ariaLabel} tabIndex={-1}>
          {options.map((opt, idx) => {
            const isSel = String(opt.value) === String(value);
            const isActive = idx === activeIndex;
            return (
              <button
                key={String(opt.value)}
                type="button"
                role="option"
                aria-selected={isSel}
                data-active={isActive ? 'true' : undefined}
                className={`custom-select-option ${isSel ? 'selected' : ''} ${isActive ? 'active' : ''}`}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                onKeyDown={(e) => handleOptionKey(e, idx)}
                ref={isActive ? (el) => el && el.focus() : undefined}
              >
                <span className="custom-select-option-label">{opt.label}</span>
                {isSel && <Check size={14} aria-hidden />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
