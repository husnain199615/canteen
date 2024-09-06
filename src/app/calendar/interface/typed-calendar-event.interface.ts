import { EventColor, EventAction } from 'calendar-utils';

export interface TypedCalendarEvent<MetaType = any> {
  start: Date;
  end?: Date;
  title: string;
  color: EventColor;
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;

  type: string;
  meta?: MetaType;
  id: string;
}
