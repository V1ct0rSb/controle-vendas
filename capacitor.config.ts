import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'controle.vendas',
  appName: 'controle-vendas',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
