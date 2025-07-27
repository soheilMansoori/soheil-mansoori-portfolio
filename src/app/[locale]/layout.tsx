import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { Vazirmatn } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { LOCALE } from '@/constants';

const vazir = Vazirmatn({ subsets: ['latin'], weight: ['400', '700'] });

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>; children: ReactNode }) {
 const { locale } = await params;

 return (
  <html lang={locale} dir={locale === LOCALE.EN ? 'ltr' : 'rtl'}>
   <body className={locale === LOCALE.FA ? vazir.className : ''}>
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
   </body>
  </html>
 );
}
