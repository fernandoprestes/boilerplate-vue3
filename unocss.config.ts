import { defineConfig, presetTypography, presetAttributify, presetUno, presetWebFonts } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  theme: {
    colors: {
      primary: '#294A3C',
    },
  },
  shortcuts: [
    ['container-center', 'container mx-auto px-4'],
    ['text-gradient', 'bg-gradient-to-rt from-[#294A3C] via-[#60917C] to-[#96D7BB] bg-clip-text text-transparent'],
  ],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Roboto', 'sans'],
        mono: 'DM Mono',
        hand: ['Dancing Script', 'cursive'],
      },
    }),
    presetAttributify(),
    presetTypography(),
    presetIcons(),
    presetRemToPx(),
  ],
});
