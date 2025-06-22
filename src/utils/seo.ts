interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export const generateMetadata = ({
  title = 'Jaque - Soluciones Digitales',
  description = 'Soluciones digitales innovadoras para potenciar tu presencia en línea. Diseño, desarrollo y marketing digital a tu medida.',
  image = '/images/og-image.jpg',
  url = '/',
  type = 'website',
  locale = 'es_AR',
  siteName = 'Jaque',
  twitterCard = 'summary_large_image',
  twitterCreator = '@jaque',
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  twitterCard?: string;
  twitterCreator?: string;
} = {}) => {
  const baseUrl = 'https://jaque.com';
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = `${baseUrl}${image}`;

  const metaTags: MetaTag[] = [
    // Basic
    { name: 'description', content: description },
    
    // Open Graph / Facebook
    { property: 'og:type', content: type },
    { property: 'og:url', content: fullUrl },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: fullImageUrl },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: locale },
    
    // Twitter
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:url', content: fullUrl },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: fullImageUrl },
    { name: 'twitter:creator', content: twitterCreator },
    
    // Additional
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Jaque' },
    { name: 'theme-color', content: '#2563eb' }, // Color primario
  ];

  const linkTags = [
    { rel: 'canonical', href: fullUrl },
    { rel: 'alternate', href: fullUrl, hreflang: locale },
    { rel: 'icon', type: 'image/x-icon', href: '/es.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ];

  return {
    title,
    meta: metaTags.map(tag => ({
      ...(tag.name && { name: tag.name }),
      ...(tag.property && { property: tag.property }),
      content: tag.content,
    })),
    link: linkTags,
  };
};
