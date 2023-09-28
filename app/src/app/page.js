"use-client"
import Navbar from "../../components/navbar";
import styles from "./style";
import "./globals.css";
import Hero from "./components/Hero";
import CardDeal from "./components/CardDeal";
import './index.css';

export default function Home() {
  return (
    <div>
      <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {
            <CardDeal />
            /* <Stats />
            <Business />
            <Billing />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer /> */}
          </div>
        </div>
      </div>    
  );
}
