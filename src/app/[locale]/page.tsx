import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Business from '@/components/Business';
import Education from '@/components/Education';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Soheil Mansoori',
};

export default async function HomePage() {
 return (
  <div>
   <main className="h-screen snap-y snap-mandatory overflow-y-scroll  [&::-webkit-scrollbar]:w-0 ">
    <Navbar>
     <Introduction />
    </Navbar>
    <About />
    <Education />
    <Business />
   </main>
  </div>
 );
}
