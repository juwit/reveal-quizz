interface Event {
  type: string;
  data: object;
}

export interface QuizConfig {
  useTimer: boolean;
  timerDuration?: number;
}

export class DefaultQuizConfig implements QuizConfig {
  useTimer = false
  timerDuration = 60

  merge(config: QuizConfig){
    if(config.useTimer){
      this.useTimer = config.useTimer
    }
    if(config.timerDuration){
      this.timerDuration = config.timerDuration
    }
  }
}

export interface Deck {
  dispatchEvent (event: Event);

  getRevealElement (): HTMLElement;

  on (event: string, callback: (event?: any) => void);

  off (event: string, callback: (event?: any) => void);

  setState (state): void;

  getState (): any;

  configure (param: { keyboard: boolean; controls: boolean }): void;

  getConfig (): { quiz : QuizConfig }
}
