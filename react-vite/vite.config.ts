
//@ts-ignore
import { defineConfig, loadEnv  } from 'vite'
//@ts-ignore
import react from '@vitejs/plugin-react'

export default ({ mode }) => {

  //@ts-ignore
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
      plugins: [react()],
        server: {
          watch: {
            usePolling: true,
          },
         host: "0.0.0.0", 
         strictPort: true,
         //@ts-ignore
         port: parseInt(process.env.VITE_PORT), 
       },
       publicDir: 'src/assets'
    });
}