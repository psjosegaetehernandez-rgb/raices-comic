import type { NarrativeBox as NB } from '../data/types';
import './NarrativeBox.css';

interface Props {
  box: NB;
}

export function NarrativeBox({ box }: Props) {
  const { text, position, style = 'caption' } = box;

  return (
    <div
      className={`narrative narrative--${position} narrative--${style}`}
      role="note"
    >
      <p>{text}</p>
    </div>
  );
}