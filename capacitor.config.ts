import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b1b3ac6e393c44b0949ea911b269cca6',
  appName: 'FoodieExpress',
  webDir: 'dist',
  server: {
    url: 'https://b1b3ac6e-393c-44b0-949e-a911b269cca6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ff6b35',
      showSpinner: false
    }
  }
};

export default config;