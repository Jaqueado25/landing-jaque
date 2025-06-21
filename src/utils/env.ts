/**
 * Obtiene una variable de entorno con un valor por defecto opcional.
 * @param key - La clave de la variable de entorno
 * @param defaultValue - Valor por defecto si la variable no está definida
 * @returns El valor de la variable de entorno o el valor por defecto
 */
export function getEnv(
  key: keyof ImportMetaEnv,
  defaultValue: string = ''
): string {
  const value = import.meta.env[key]
  
  if (value === undefined || value === '') {
    if (defaultValue === '') {
      console.warn(`La variable de entorno ${key} no está definida`)
    }
    return defaultValue
  }
  
  return value
}

/**
 * Obtiene la URL base del sitio con un path opcional
 * @param path - Ruta a concatenar con la URL base
 * @returns URL completa
 */
export function getSiteUrl(path: string = ''): string {
  const baseUrl = getEnv('PUBLIC_SITE_URL', 'http://localhost:4321').replace(/\/+$/, '')
  const cleanPath = path.replace(/^\/+/, '')
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl
}

/**
 * Interfaz para la configuración de la aplicación
 */
interface AppConfig {
  siteName: string;
  siteUrl: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  analytics: {
    googleAnalyticsId?: string;
    facebookPixelId?: string;
  };
  emailjs: {
    serviceId?: string;
    templateId?: string;
    publicKey?: string;
  };
  recaptcha: {
    siteKey?: string;
  };
  getFullUrl: (path: string) => string;
  getSocialUrl: (platform: keyof AppConfig['social'], path?: string) => string | undefined;
}

/**
 * Configuración de la aplicación
 */
export const appConfig: AppConfig = {
  // Información del sitio
  siteName: getEnv('PUBLIC_SITE_NAME', 'Jaque'),
  siteUrl: getSiteUrl(),
  
  // Información de contacto
  contact: {
    email: getEnv('PUBLIC_CONTACT_EMAIL', 'info@automatizapro.com'),
    phone: getEnv('PUBLIC_CONTACT_PHONE', '+54 11 1234-5678'),
    address: getEnv('PUBLIC_CONTACT_ADDRESS', 'Av. Corrientes 1234, CABA, Argentina'),
  },
  
  // Redes sociales
  social: {
    twitter: getEnv('PUBLIC_TWITTER_HANDLE', 'automatizapro'),
    facebook: getEnv('PUBLIC_FACEBOOK_PAGE', 'automatizapro'),
    instagram: getEnv('PUBLIC_INSTAGRAM_USER', 'automatizapro'),
    linkedin: getEnv('PUBLIC_LINKEDIN_COMPANY', 'automatizapro'),
  },
  
  // Configuración de analíticas
  analytics: {
    googleAnalyticsId: getEnv('PUBLIC_GOOGLE_ANALYTICS_ID'),
    facebookPixelId: getEnv('PUBLIC_FACEBOOK_PIXEL_ID'),
  },
  
  // Configuración de EmailJS
  emailjs: {
    serviceId: getEnv('PUBLIC_EMAILJS_SERVICE_ID'),
    templateId: getEnv('PUBLIC_EMAILJS_TEMPLATE_ID'),
    publicKey: getEnv('PUBLIC_EMAILJS_PUBLIC_KEY'),
  },
  
  // Configuración de reCAPTCHA
  recaptcha: {
    siteKey: getEnv('PUBLIC_RECAPTCHA_SITE_KEY'),
  },
  
  // Funciones de utilidad
  getFullUrl: (path: string) => getSiteUrl(path),
  getSocialUrl: (platform: keyof AppConfig['social'], path: string = '') => {
    const baseUrls: Record<keyof AppConfig['social'], string> = {
      twitter: `https://twitter.com/${appConfig.social.twitter}`,
      facebook: `https://facebook.com/${appConfig.social.facebook}`,
      instagram: `https://instagram.com/${appConfig.social.instagram}`,
      linkedin: `https://linkedin.com/company/${appConfig.social.linkedin}`,
    };
    
    const baseUrl = baseUrls[platform];
    if (!baseUrl) return undefined;
    
    return path ? `${baseUrl}/${path.replace(/^\/+/, '')}` : baseUrl;
  },
}
