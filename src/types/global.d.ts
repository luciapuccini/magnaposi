interface JQuery {
  (selector: string): JQuery;
  (element: Element): JQuery;
  (elements: Element[]): JQuery;
  ready(callback: () => void): JQuery;
  on(event: string, handler: (event: Event) => void): JQuery;
  on(event: string, selector: string, handler: (event: Event) => void): JQuery;
  off(event: string): JQuery;
  off(event: string, handler: (event: Event) => void): JQuery;
  addClass(className: string): JQuery;
  removeClass(className: string): JQuery;
  toggleClass(className: string): JQuery;
  attr(name: string): string | null;
  attr(name: string, value: string): JQuery;
  css(name: string): string;
  css(name: string, value: string): JQuery;
  find(selector: string): JQuery;
  each(callback: (index: number, element: Element) => void): JQuery;
  val(): string;
  val(value: string): JQuery;
  text(): string;
  html(): string;
  append(content: string | Element): JQuery;
  prepend(content: string | Element): JQuery;
  insertBefore(target: string | Element): JQuery;
  insertAfter(target: string | Element): JQuery;
  clone(): JQuery;
  parent(): JQuery;
  prev(): JQuery;
  scrollTop(): number;
  scrollTop(value: number): JQuery;
  scrollHeight: number;
  get(index?: number): Element | Element[];
  data(key: string): any;
  data(key: string, value: any): JQuery;
  removeData(key: string): JQuery;
}

interface JQueryStatic {
  (selector: string): JQuery;
  (element: Element): JQuery;
  (elements: Element[]): JQuery;
  fn: Record<string, Function>;
  ready(callback: () => void): JQuery;
}

declare const jQuery: JQueryStatic;
declare const $: JQueryStatic;

interface BreakpointsConfig {
  [key: string]: [string | null, string];
}

interface BreakpointsAPI {
  (config: BreakpointsConfig): void;
  active(query: string): boolean;
  on(query: string, handler: () => void): void;
}

declare const breakpoints: BreakpointsAPI;

interface BrowserInfo {
  name: string;
  version: number;
  os: string;
  osVersion: number;
  touch: boolean;
  mobile: boolean;
  canUse(property: string): boolean;
}

declare const browser: BrowserInfo;

interface Window {
  open(url: string, target: string, features?: string): Window | null;
  setTimeout(handler: () => void, delay: number): number;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
  location: Location;
  document: Document;
  navigator: Navigator;
  sessionStorage: Storage;
  history: History;
  matchMedia(query: string): MediaQueryList;
  msMaxTouchPoints: number;
  ontouchstart: any;
}

declare const window: Window;
declare const document: Document;
declare const navigator: Navigator;

interface HTMLInputElement extends HTMLElement {
  value: string;
}

interface HTMLElement extends Element {
  classList: DOMTokenList;
  scrollIntoView(options?: ScrollIntoViewOptions): void;
}

interface DOMTokenList {
  remove(className: string): void;
  add(className: string): void;
  toggle(className: string): void;
  contains(className: string): boolean;
}

interface ScrollIntoViewOptions {
  behavior?: 'auto' | 'smooth';
  block?: 'start' | 'center' | 'end' | 'nearest';
}

interface MixpanelPeople {
  set(properties: Record<string, any>): void;
  set_once(properties: Record<string, any>): void;
  unset(properties: string[]): void;
  increment(property: string, value: number): void;
  append(property: string, value: any): void;
  union(property: string, value: any): void;
  track_charge(amount: number, properties?: Record<string, any>): void;
  clear_charges(): void;
  delete_user(): void;
  remove(property: string, value: any): void;
}

interface Mixpanel {
  track_links(selector: string, eventName: string, options?: Record<string, any>): void;
  track(eventName: string, properties?: Record<string, any>): void;
  people: MixpanelPeople;
  identify(userId: string): void;
  init(token: string, config?: any): void;
  toString(stub?: boolean): string;
  get_group(): any;
}

interface Window {
  mixpanel?: Mixpanel;
  recaptchaCallback?: () => void;
}
