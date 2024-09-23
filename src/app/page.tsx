import Appoinment from "../components/Appoinment/Appoinment";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Container from "../components/Container/Container";
import OverlayBannerRight from "../components/OverlayBanner/OverlayBannerRight";
import SecondaryBanner from "../components/SecondaryBanner/SecondaryBanner";
import Service from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Container className="md:flex-col">
        <Banner />
        <SecondaryBanner />
        <Service />
      </Container>

      <Testimonials />

      <OverlayBannerRight />
      <Container className="md:flex-col ">
        <Appoinment />
        <Blogs />
      </Container>
    </>
  );
}
