import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.min.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/nice-select.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/style.css';

import Dependency from '@/components/utilities/Dependency';
import { ToastContainer } from 'react-toastify';
import { Manrope, Outfit } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Code4MatesDev - Redefining Software Excellence",
  description: "Code4MatesDev: Custom software development, cloud solutions, and digital transformation for visionary businesses.",
  icons: {
    icon: [
      { url: '/assets/img/favicon.png' },
      { url: '/assets/img/favicon.ico' }
    ],
    apple: [
      { url: '/assets/img/favicon.png' }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${manrope.className}`}>
        <ToastContainer />
        <Dependency />
        {children}
      </body>
    </html>
  );
}
