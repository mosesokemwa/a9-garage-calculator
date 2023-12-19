'use client';

import A9Form from './components/A9Form';
import A9GarageLevelInfo from './components/A9GarageLevelInfo';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <A9GarageLevelInfo />
      <div className="flex flex-col h-screen justify-between">
        <A9Form />
        <Footer />
      </div>
    </>
  );
}
