import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "MyAwala - Pure Amla Products for Healthy Living", 
  description = "Discover 100% natural Amla (Awala) products including fresh juice, candies, pickles, powder, and more. Boost immunity, improve health, and enjoy authentic taste with MyAwala.",
  keywords = "amla products, awala juice, amla candy, amla powder, amla pickle, natural health products, immunity booster, vitamin c, ayurvedic products, healthy snacks",
  image = "/bg-1.png",
  url = "https://myawala.com",
  type = "website"
}) => {
  const siteName = "MyAwala";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MyAwala" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#d89a7e" />
    </Helmet>
  );
};

export default SEO;

