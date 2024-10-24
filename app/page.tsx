import Demo from '@/components/Demo';
import Header from '@/components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto]">
      <Header />
      <Demo />
      <Footer />
    </div>
  );
}
