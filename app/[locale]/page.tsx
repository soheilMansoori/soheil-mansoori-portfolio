// import { setStaticParamsLocale } from 'next-international/server';
import Business from '@/components/Business';
// import { getI18n, getScopedI18n, getCurrentLocale } from '../../locales/server';
// import Client from './client';
// import { Provider } from './provider';
import Education from '@/components/Education';
import Background from '@/components/Background';
import Home from '@/components/Home';


export default async function HomePage() {
  // const { locale } = await params;


  // const t = await getI18n();
  // const t2 = await getScopedI18n('scope.more');
  // const currentLocale = getCurrentLocale();

  return (
    <div>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <Home/>
        <Background/>
        <Education/>
        <Business/>
      </main>
      {/* <Provider locale={locale}>
        <Client />
      </Provider>
      <h1>SSR / SSG</h1>
      <p>
        Current locale:
        <span>{currentLocale}</span>
      </p>
      <p>Hello: {t('hello')}</p>
      <p>
        Hello:{' '}
        {t('welcome', {
          name: 'John',
        })}
      </p>
      <p>
        Hello (with React components):{' '}
        {t('welcome', {
          name: <strong>John</strong>,
        })}
      </p>
      <p>
        Hello:{' '}
        {t('about.you', {
          age: '23',
          name: 'Doe',
        })}
      </p>
      <p>
        Hello (with React components):{' '}
        {t('about.you', {
          age: <strong>23</strong>,
          name: 'Doe',
        })}
      </p>
      <p>{t2('test')}</p>
      <p>
        {t2('param', {
          param: 'test',
        })}
      </p>
      <p>
        {t2('param', {
          param: <strong>test</strong>,
        })}
      </p>
      <p>{t2('and.more.test')}</p>
      <p>{t('missing.translation.in.fr')}</p>
      <p>
        {t('cows', {
          count: 1,
        })}
      </p>
      <p>
        {t('cows', {
          count: 2,
        })}
      </p>
      <p>
        {t2('stars', {
          count: 1,
        })}
      </p>
      <p>
        {t2('stars', {
          count: 2,
        })}
      </p> */}
    </div>
  );
}