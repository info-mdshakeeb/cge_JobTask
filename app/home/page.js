import Brand from "@/components/brand/Brand";
import Experts from "@/components/experts/Experts";
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
        </div>
    );
}
export default HomePage;