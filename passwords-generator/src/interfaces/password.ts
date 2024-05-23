export interface Settings {
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
  length: number;
}

export interface SettingsInputMap {
  key: string;
  label: string;
}
