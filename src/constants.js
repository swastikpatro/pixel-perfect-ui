import {
  AboutUsPage,
  BlogPage,
  CareerPage,
  CollectionPage,
  Features,
  GeneratorPage,
  Home,
  PricingPage,
} from './pages';

export const MAX_MOBILE_WIDTH = 768;
export const NAV_LINKS = [
  { id: 1, text: 'Home Page', url: '/', Component: Home },
  { id: 2, text: 'Generator', url: '/generator', Component: GeneratorPage },
  { id: 3, text: 'Pricing-plan', url: '/pricing', Component: PricingPage },
  { id: 4, text: 'Blog - News', url: '/blog', Component: BlogPage },
  { id: 5, text: 'About us', url: '/about', Component: AboutUsPage },
  { id: 6, text: 'Features', url: '/features', Component: Features },
  {
    id: 7,
    text: 'Collection-2023',
    url: '/collection',
    Component: CollectionPage,
  },
  { id: 8, text: 'Career', url: '/career', Component: CareerPage },
];
