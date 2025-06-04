import { Layout } from "./components/Layout";
import { AboutUs } from "/workspaces/Agencty-landing-page/src/components/sections /AboutUs.tsx";
import { Brands } from "/workspaces/Agencty-landing-page/src/components/sections /Brands.tsx";
import { CTA } from "/workspaces/Agencty-landing-page/src/components/sections /CalltoAction.tsx";
import { Hero } from "/workspaces/Agencty-landing-page/src/components/sections /Hero.tsx";
import { Pricing } from "/workspaces/Agencty-landing-page/src/components/sections /Pricings.tsx";
import { Services } from "/workspaces/Agencty-landing-page/src/components/sections /Services.tsx";



function App() {
  return (
    <Layout title="SHAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;