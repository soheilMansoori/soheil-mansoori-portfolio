import Call from '@/icons/Call';
import Github from '@/icons/Github';
import Instagram from '@/icons/Instagram';
import Linkedin from '@/icons/Linkedin';
import Mail from '@/icons/Mail';
import Whatsapp from '@/icons/Whatsapp';

export const LOCALE = {
 EN: 'en',
 FA: 'fa',
};
export const LOCALES = Object.values(LOCALE);
export const DEFAULT_LOCALE = LOCALE.EN;

export const SOCIAL_LINKS = {
 PHONE: {
  url: 'tel:989960161264',
  Icon: <Call />,
 },
 GITHUB: {
  url: 'https://github.com/soheilMansoori',
  Icon: <Github />,
 },
 LINKEDIN: {
  url: 'https://www.linkedin.com/in/yourusername',
  Icon: <Linkedin />,
 },

 INSTAGRAM: {
  url: 'https://www.instagram.com/yourusername',
  Icon: <Instagram />,
 },

 WHATSAPP: {
  url: 'https://wa.me/yourphonenumber',
  Icon: <Whatsapp />,
 },
 EMAIL: {
  url: 'soheil.mansoori.dev@gmail.com',
  Icon: <Mail />,
 },
};

export const SECTIONS = {
 INTRODUCTION: 'introduction',
 ABOUT: 'about',
 EXPERIENCE: 'experience',
 SKILLS: 'skills',
};
