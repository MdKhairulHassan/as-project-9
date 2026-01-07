import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // build: {
  //   outDir: 'dist',
  // },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: '/', // ensures correct paths on Vercel
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ['react', 'react-dom'],
//           router: ['react-router', 'react-router-dom'],
//           firebase: [
//             'firebase/app',
//             'firebase/auth',
//             'firebase/firestore',
//             'firebase/storage',
//           ],
//         },
//       },
//     },
//   },
// });
