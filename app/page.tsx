import Demo from '@/components/Demo';
import Header from '@/components/Header';
import { Suspense } from 'react';
import Footer from './components/Footer';
import WebVitals from './components/WebVitals';

export default function Home() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto]">
      <Header />
      <Suspense>
        <Demo>
          <WebVitals />
        </Demo>
      </Suspense>
      <Footer />
    </div>
  );
}
