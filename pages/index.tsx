import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Website Topup Voucher Game - Get New Experience In Game</title>
        <meta
          name="description"
          content="Kita menyediakan jasa untuk topup voucher game."
        />
        <meta
          property="og:title"
          content="Website Topup Voucher Game - Get New Experience In Game"
        />
        <meta
          property="og:description"
          content="Kita menyediakan jasa untuk topup voucher game."
        />
        <meta property="og:image" content="https://yourimageurl" />
        <meta property="og:url" content="https://website-topup-voucher.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
