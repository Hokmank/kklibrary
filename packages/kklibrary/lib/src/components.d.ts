import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
    DatePicker: typeof components.DatePicker;
    ContentTitle: typeof components.ContentTitle;
  }
}
export { };