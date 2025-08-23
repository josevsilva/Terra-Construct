
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: {50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"}}, boxShadow:{soft:"0 8px 30px rgba(0,0,0,0.06)"}, borderRadius:{xl:"1rem","2xl":"1.25rem"}}},
  plugins: [],
};
export default config;
