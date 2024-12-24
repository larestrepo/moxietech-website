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
import DottedImageWithText from '@site/src/components/Layout/DottedImageWithText';

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
      title="Home"
      description="We are a software and technology company specializing in blockchain solutions. Our mission is to build a better world through blockchain technology.">
      <HomepageHeader />
      <div></div>
      <main>
      <BackgroundWrapper backgroundType={"zoom"}>
          <BoundaryBox>
            {/* <FeaturedTitleWithText
                title="MOXIEPOOL"
                description={[
                  "Pool latinoamericano, primer pool colombiano y que ha existido desde el principio de Cardano.",
                  "Para nosotros, MoxiePool es el punto de inicio con el ecosistema de Cardano, pero claramente estamos presentes de muchas más formas." ,

                  "Ver Iniciativas y proyectos en las que trabajamos.....",
                ]}
                quote={[
                  "Seguimos y seguiremos mejorando en todo sentido",
                  <br key="line1" />, 
                  "Todo es posible con constancia",
                ]}
                buttonLabel="Use Cases"
                buttonLink="/use-cases"
                headingDot={true}
              /> */}


            <Divider text="MOXIEPOOL" />
            
            <DottedImageWithText
                imageName="undraw_engineering-team_13ax"
                title="Latin American stake pool and first in Colombia"
                text={[
                  "We are proud to be a Latin American stake pool operator and the first pool in Colombia on Cardano's network since the launch of Shelley.",
                  "Since then we have maintaned consistet operations, \
                  contributing to block validation and the growth of the Cardano ecossystem in the region",
                  // We are a proud member of the Cardano community and are actively involved in the network's development.",
                ]}
                headingDot={true}
              />
            <DottedImageWithText
                imageName="undraw_educator_6dgp"
                title="Blockchain Expertise"
                text={[
                  "Our stake pool is managed by a team of highly skilled administrators with extensive knowledge in blockchain technologies, decentralized systems, and Web3 innovation.", 
                  "With a strong commitment to professionalism, we ensure seamless pool operation, \
                  robust security measures, and active contributions to the network's decentralization. By leveraging our expertise, we aim to provide delegators with reliable rewards while fostering the growth and integrity of the blockchain ecosystem.",
                ]}
                headingDot={true}
              />
            <DottedImageWithText
                imageName="undraw_content-team_i066"
                title="Promoting Cardano Adoption in Latin America"
                text={[
                  "We are dedicated to advancing Cardano adoption across Latin America by leading innovative projects that showcase the real-world potential of blockchain technology.", 
                  "Alongside these initiatives, we actively engage with the local community by providing educational content not only on blockchain but also on other emerging technologies such as AI and IoT. \
                  Our mission is to foster a strong, inclusive community in the region, connected through technology and dedicated to driving innovation and accessibility."
                ]}
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
