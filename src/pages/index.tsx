import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BackgroundWrapper from '@site/src/components/Layout/BackgroundWrapper';
import BoundaryBox from '@site/src/components/Layout/BoundaryBox';
import FeaturedTitleWithText from '@site/src/components/Layout/FeaturedTitleWithText';
import WelcomeHero from '../components/WelcomeHero';
import styles from '@site/src/pages/index.module.css';
import VisionBox from '@site/src/components/Layout/VisionBox';
import Divider from '@site/src/components/Layout/Divider';
import TitleWithText from '@site/src/components/Layout/TitleWithText';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <WelcomeHero
      title={siteConfig.title}
      description={
        <div>
          <p>
            With over a decade of experience in software development and industrial technology, MoxieTech is on a mission to become a leading specialist in blockchain solutions on <span className={styles.bold}>Cardano</span>.
          </p>
        </div>
      }
    />
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="We are a software and technology company specializing in blockchain solutions. Our mission is to build a better world through blockchain technology.">
      <HomepageHeader />
      <div></div>
      <main>
      <BackgroundWrapper backgroundType={"zoom"}>
          <BoundaryBox>
            <FeaturedTitleWithText
                title="MOXIEPOOL"
                description={[
                  "Pool latinoamericano, primer pool colombiano y que ha existido desde el principio de Cardano.",
                  "Para nosotros, MoxiePool es el punto de inicio con el ecosistema de Cardano, pero claramente estamos presentes de muchas más formas." ,

                  "Ver Iniciativas y proyectos en las que trabajamos.....",
                ]}
                quote={[
                  "Seguimos y seguiremos mejorando en todo sentido",
                  <br key="line1" />, /* FIXME: too hacky */
                  "Todo es posible con constancia",
                ]}
                buttonLabel="Use Cases"
                buttonLink="/use-cases"
                headingDot={true}
              />

          </BoundaryBox>
        </BackgroundWrapper>


        {/* <VisionBox
            title={[
              "MOXIEPOOL",
              "Ticker: Moxie",
            ]}
          /> */}

        {/* <BoundaryBox>
          <Divider text="Make the Change" />
          <TitleWithText
            title="Discover Cardano"
            description={[
              "Cardano is the first blockchain platform to be built through [peer-reviewed research](/research), \
            to be secure enough to protect the data of billions, scalable enough to accommodate global systems, \
            and robust enough to support foundational change.",
            ]}
            titleType="black"
            headingDot={true}
            slightText=""
            buttonLabel=""
            buttonLink=""
          />

          <HomeDiscoverSection />
        </BoundaryBox> */}
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
