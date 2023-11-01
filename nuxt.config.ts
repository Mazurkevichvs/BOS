// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { '@': resolve(__dirname, '/') },
  css: ['normalize.css/normalize.css', `~/assets/main.scss`],
});
