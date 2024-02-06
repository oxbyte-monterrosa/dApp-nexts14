import { Stats, Business, BusinessCard, Hero, Footer, SmartContract } from '@/components';
import styles from '@/CustomStyles';

export default function Home() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <SmartContract/>
          <Stats />
          <BusinessCard />
          <Footer />
        </div>
      </div>
    </>
  );
}
