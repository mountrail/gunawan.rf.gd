import Head from "next/head";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import Footer from "./MainFooter";
import { siteTitle, navbarHeight, footerHeight } from "../pages/_app";

export default function Layout({ children, home }) {
  return (
    <div className={`flex flex-col `}>
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

        {/* Android Chrome Icons */}
        <link rel="icon" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="/favicon/android-chrome-512x512.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <TopNavbar />
      <main
        className={`flex flex-col bg-tertiary scrollbar-hide overflow-hidden px-sm md:px-md text-sm sm:text-sm md:text-lg lg:text-xl`}
        style={{
          height: `calc(100vh - (${navbarHeight} + ${footerHeight} ))`,
          marginTop: `${navbarHeight}`,
          marginBottom: `${footerHeight}`,
        }}
      >
        <div
          className={`flex flex-col grow w-full ${home ? "justify-center" : ""
            } scrollbar-hide overflow-auto  py-6`}
          style={{
            height: `calc(100vh - (${navbarHeight} + ${footerHeight} ))`,
          }}
        >
          {children}
        </div>
      </main>
      <BottomNavbar />
      <Footer />
    </div>
  );
}
