import styles from "@/CustomStyles";
import { Button } from "@/components";

const BusinessCard: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Explore our solutions today!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        All the tools you need for seamless crypto transactions and expanding your venture globally.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button 
        text="Get Started"         
      />
    </div>
  </section>
);

export default BusinessCard;