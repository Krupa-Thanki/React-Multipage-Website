import About from "../Components/About";
import Client from "../Components/Client";
import Contact from "../Components/Contact";
import Offer from "../Components/Offer";
import Slider from "../Components/Slider";

function Home()
{
    return(
        <div>
            <Slider/>
            <Offer/>
            <About/>
            <Client/>
            <Contact/>
        </div>
    );
}

export default Home;