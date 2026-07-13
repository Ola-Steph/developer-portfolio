// pages/_app.tsx
import '../styles/globals.css'; // Ensure Tailwind CSS is included
import Navbar from "@/components/v2/Navbar"; // Adjust the path based on your structure
import Footer from "@/components/v2/Footer";
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
