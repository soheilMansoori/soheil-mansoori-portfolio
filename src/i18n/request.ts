import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { DEFAULT_LOCALE } from '@/constants';

export default getRequestConfig(async ({ requestLocale }) => {
 try {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
   locale,
   messages: (await import(`@/locales/${locale}.json`)).default,
  };
 } catch (error) {
  return {
   locale: DEFAULT_LOCALE,
   messages: (await import(`@/locales/${DEFAULT_LOCALE}.json`)).default,
  };
 }
});
