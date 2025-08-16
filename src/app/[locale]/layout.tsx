import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { Vazirmatn } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import { LOCALE } from '@/constants';

const vazir = Vazirmatn({ subsets: ['latin'], weight: ['400', '700'] });

export async function generateMetadata({
 params,
}: {
 params: { locale: (typeof LOCALE)[keyof typeof LOCALE] };
}): Promise<Metadata> {
 const { locale } = params;

 return {
  title: locale === LOCALE.FA ? 'سهیل منصوری' : 'Soheil Mansoori',
  description: locale === LOCALE.FA ? 'مهندس نرم‌افزار و توسعه‌دهنده وب' : 'Software Engineer and Web Developer',
  icons: '/images/logo-white.png',
 };
}

export default async function RootLayout({
 params,
 children,
}: {
 params: Promise<{ locale: string }>;
 children: ReactNode;
}) {
 const { locale } = await params;

 return (
  <html lang={locale} dir={locale === LOCALE.EN ? 'ltr' : 'rtl'}>
   <body className={locale === LOCALE.FA ? vazir.className : ''}>
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
   </body>
  </html>
 );
}
