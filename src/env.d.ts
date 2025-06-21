/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Configuración de la aplicación
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  
  // Configuración de contacto
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_CONTACT_PHONE: string;
  readonly PUBLIC_CONTACT_ADDRESS: string;
  
  // Configuración de redes sociales
  readonly PUBLIC_TWITTER_HANDLE?: string;
  readonly PUBLIC_FACEBOOK_PAGE?: string;
  readonly PUBLIC_INSTAGRAM_USER?: string;
  readonly PUBLIC_LINKEDIN_COMPANY?: string;
  
  // Configuración de analíticas
  readonly PUBLIC_GOOGLE_ANALYTICS_ID?: string;
  readonly PUBLIC_FACEBOOK_PIXEL_ID?: string;
  
  // Configuración de EmailJS
  readonly PUBLIC_EMAILJS_SERVICE_ID?: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID?: string;
  readonly PUBLIC_EMAILJS_PUBLIC_KEY?: string;
  
  // Configuración de reCAPTCHA
  readonly PUBLIC_RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
