import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <div className="container-fluid py-5">
        <Hero />
        <LeftSection
          imageUrl="Media/kite.png"
          productName="Kite"
          description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          linkName="Try Demo"
          linkName2="Learn more"
          arrowIcon={<i class="bi bi-arrow-right"></i>}
        />
        <RightSection
          imageUrl="Media/console.png"
          productName="Console"
          description="The central dashboard for your Stocifity account. Gain insights into your trades and investments with in-depth reports and visualisations."
          linkName="Learn more"
          arrowIcon={<i class="bi bi-arrow-right"></i>}
        />
        <LeftSection
          imageUrl="Media/coin.png"
          productName="Coin"
          description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          learnMoreLink=""
          linkName="Coin"
          arrowIcon={<i class="bi bi-arrow-right"></i>}
        />
        <RightSection
          imageUrl="Media/kiteconnect.png"
          productName="Kite Connect API"
          description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          linkName="Kite Connect"
          arrowIcon={<i class="bi bi-arrow-right"></i>}
        />
        <LeftSection
          imageUrl="Media/varsity.png"
          productName="Varsity mobile"
          description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        />
        <Universe/>
      </div>
    </>
  );
}
