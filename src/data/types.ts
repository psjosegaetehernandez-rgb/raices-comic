export type PanelType =
  | 'establishing'
  | 'close-up'
  | 'dialogue'
  | 'action'
  | 'decision'
  | 'reflection'
  | 'transition';

export type PanelLayout =
  | 'full'
  | 'half'
  | 'third'
  | 'quarter'
  | 'grid-2'
  | 'grid-3'
  | 'grid-4';

export type BubblePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center';

export type BubbleStyle = 'speech' | 'thought' | 'whisper' | 'shout';

export interface Dialogue {
  id: string;
  character: string;
  text: string;
  position: BubblePosition;
  style?: BubbleStyle;

  className?: string;}

export interface NarrativeBox {
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  style?: 'caption' | 'inner-voice' | 'quote';
}

export interface Panel {
  id: string;
  type: PanelType;
  layout: PanelLayout;
  image: string;
  imageAlt: string;
  caption?: string;
  narration?: string;
  dialogues?: Dialogue[];
  narrativeBoxes?: NarrativeBox[];
  decisionId?: string;
}

export interface Page {
  id: string;
  layout: 'full-panel' | 'grid-2' | 'grid-3' | 'grid-4' | 'featured';
  panels: Panel[];
}

export interface DecisionOption {
  id: string;
  label: string;
  text: string;
  consequence: string;
  pedagogicalTag?: string;
}

export interface Decision {
  id: string;
  question: string;
  context?: string;
  options: DecisionOption[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  protagonist: string;
  location: string;
  theme: string;
  estimatedMinutes: number;
  visual: {
    cover: string;
    palette: 'tierra' | 'sunset' | 'field' | 'sky' | 'ink';
  };
  pages: Page[];
  decisions?: Decision[];
}