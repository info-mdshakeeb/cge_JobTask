import Blog from "@/components/blog/Blog";
import Brand from "@/components/brand/Brand";
import SellerBrand from "@/components/brand/sellerBrand/SellerBrand";
import Contact from "@/components/contact/Contact";
import Experts from "@/components/experts/Experts";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Hosting from "@/components/hosting/Hosting";
import Miners from "@/components/miners/Miners";

function HomePage() {
    return (
        <div>
            <Hero />
            <Brand />
            <Miners />
            <Experts />
            <Hosting />
            <SellerBrand />
            <Contact />
            <Blog />
            <Footer />
        </div>
    );
}
export default HomePage;