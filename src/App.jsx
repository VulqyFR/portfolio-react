import styles from "./style";
import { Certifications, Contact, Curiculum_Vitae, Hero, Navbar, Projects, Technology_Watch, Training_Period, Footer } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects/>
        <Training_Period/>
        <Technology_Watch/>
        <Curiculum_Vitae/> 
        <Certifications/>
        <Contact/>
        <Footer/>
      </div>
    </div>
    
  </div>
  );

export default App