import Header from '@/components/Header';
import Demo from '@/components/Demo';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-full">
      <Header />
      <Demo />
      <Footer />
    </div>
  );
}
