import Brand from "@/components/brand/Brand";
import Experts from "@/components/experts/Experts";
import Hero from "@/components/hero/Hero";
import Miners from "@/components/miners/Miners";

function HomePage() {
    return (
        <div>
            <Hero />
            <Brand />
            <Miners />
            <Experts />
        </div>
    );
}
export default HomePage;