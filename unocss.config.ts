import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetIcons(),
    presetRemToPx(),
  ],
});
