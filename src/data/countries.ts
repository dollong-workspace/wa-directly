export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export const countries: Country[] = [
  { code: "ID", name: "Indonesia", dialCode: "62", flag: "🇮🇩" },
  { code: "US", name: "United States", dialCode: "1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "44", flag: "🇬🇧" },
  { code: "AU", name: "Australia", dialCode: "61", flag: "🇦🇺" },
  { code: "IN", name: "India", dialCode: "91", flag: "🇮🇳" },
  { code: "SG", name: "Singapore", dialCode: "65", flag: "🇸🇬" },
  { code: "MY", name: "Malaysia", dialCode: "60", flag: "🇲🇾" },
  { code: "PH", name: "Philippines", dialCode: "63", flag: "🇵🇭" },
  { code: "TH", name: "Thailand", dialCode: "66", flag: "🇹🇭" },
  { code: "VN", name: "Vietnam", dialCode: "84", flag: "🇻🇳" },
  { code: "JP", name: "Japan", dialCode: "81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dialCode: "82", flag: "🇰🇷" },
  { code: "CN", name: "China", dialCode: "86", flag: "🇨🇳" },
  { code: "DE", name: "Germany", dialCode: "49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", dialCode: "39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dialCode: "34", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", dialCode: "31", flag: "🇳🇱" },
  { code: "BR", name: "Brazil", dialCode: "55", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", dialCode: "52", flag: "🇲🇽" },
  { code: "CA", name: "Canada", dialCode: "1", flag: "🇨🇦" },
  { code: "AE", name: "UAE", dialCode: "971", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", dialCode: "966", flag: "🇸🇦" },
];
