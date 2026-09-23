import { useState } from 'react';
import type { Decision, DecisionOption } from '../data/types';
import './DecisionModal.css';

interface Props {
  decision: Decision;
  onChoose: (option: DecisionOption) => void;
  onClose: () => void;
}

export function DecisionModal({ decision, onChoose, onClose }: Props) {
  const [selected, setSelected] = useState<DecisionOption | null>(null);

  const handleSelect = (option: DecisionOption) => {
    setSelected(option);
  };

  const handleConfirm = () => {
    if (selected) {
      onChoose(selected);
    }
  };

  const handleBack = () => {
    setSelected(null);
  };

  return (
    <div
      className="decision-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="decision-question"
    >
      <div className="decision-modal__backdrop" onClick={onClose} />

      <div className="decision-modal__box">
        <button
          className="decision-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {!selected ? (
          <>
            <p className="decision-modal__eyebrow">Decisión</p>
            <h2
              id="decision-question"
              className="decision-modal__question"
            >
              {decision.question}
            </h2>

            {decision.context && (
              <p className="decision-modal__context">{decision.context}</p>
            )}

            <div className="decision-modal__options">
              {decision.options.map((option) => (
                <button
                  key={option.id}
                  className="decision-option"
                  onClick={() => handleSelect(option)}
                >
                  <span className="decision-option__label">
                    {option.label}
                  </span>
                  <span className="decision-option__text">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="decision-modal__consequence">
            <p className="decision-modal__eyebrow">
              Elegiste: {selected.label}
            </p>
            <h2 className="decision-modal__question">
              {selected.text}
            </h2>
            <p className="decision-modal__consequence-text">
              {selected.consequence}
            </p>

            {selected.pedagogicalTag && (
              <p className="decision-modal__tag">
                {selected.pedagogicalTag}
              </p>
            )}

            <div className="decision-modal__actions">
              <button className="decision-modal__btn-back" onClick={handleBack}>
                ← Volver
              </button>
              <button
                className="decision-modal__btn-confirm"
                onClick={handleConfirm}
              >
                Continuar →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}