
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster 
      position="top-center" 
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#333',
          fontWeight: 500,
          borderRadius: '0.75rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
      }}
    />
  );
}
