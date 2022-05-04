import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';

export default () => {
  return (
    <>
      <Navigatie />
      <main className={styles.container}>
        <h1>Hallo ik ben Cidalia!</h1>
        <section className={styles.cardContainer}>
          <Projectkaart
            titel="webdesign"
            beschrijving="Correct"
            Plaatje={AccessibilityPlaatje}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};
