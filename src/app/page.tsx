import Header from "@/components/header";
import Nav from "@/components/nav";
import Corousel from "@/components/corousel";
import SeasonCollection from "@/components/seasonCollection";
import FeatureProducts from "@/components/featureProducts";
import Disconts from "@/components/discounts";
import Information from "@/components/information";


export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Corousel />
      <SeasonCollection />
      <FeatureProducts />
      <Disconts />
      <Information />
    </>
  );
}
