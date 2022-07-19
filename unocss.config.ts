import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  shortcuts: [
    ['container-center', 'container mx-auto px-4'],
    ['text-gradient', 'bg-gradient-to-rt from-[#294A3C] via-[#60917C] to-[#96D7BB] bg-clip-text text-transparent'],
  ],
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: ['Roboto', 'sans'],
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        hand: ['Dancing Script', 'cursive'],
      },
    }),
    presetIcons(),
    presetRemToPx(),
  ],
});
