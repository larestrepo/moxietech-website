import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BackgroundWrapper from '@site/src/components/Layout/BackgroundWrapper';
import BoundaryBox from '@site/src/components/Layout/BoundaryBox';
import WelcomeHero from '../components/WelcomeHero';
import styles from '@site/src/pages/index.module.css';
import VisionBox from '@site/src/components/Layout/VisionBox';
import Divider from '@site/src/components/Layout/Divider';
import TitleWithText from '@site/src/components/Layout/TitleWithText';
import DottedImageWithText from '@site/src/components/Layout/DottedImageWithText';
import ClipboardIcon from '@site/static/img/icons/clipboard.svg';
import ImageWithText from '../components/Layout/ImageWithText';
import Link from '@docusaurus/Link';
import clsx from "clsx";
import TableData from '../components/Layout/TableData';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <WelcomeHero
      title={siteConfig.title}
      description={
        <div>
          <p>
            With over two decades of experience in software development and industrial technology, MoxieTech is on a mission to become a leading specialist in solutions on <span className={styles.bold}>Cardano</span> blockchain.
          </p>
        </div>
      }
    />
  );
}

function handleCopy(text: string) {
  navigator.clipboard.writeText(text).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="We are a software and technology company specializing in blockchain solutions. Our mission is to build a better world through blockchain technology.">
      <HomepageHeader />
      <div></div>
      <main>
        <BackgroundWrapper backgroundType={"zoom"}>
          <BoundaryBox>

            <Divider text="MOXIEPOOL" />

            <DottedImageWithText
              imageName="undraw_engineering-team_13ax"
              title="Latin American stake pool and first in Colombia"
              text={[
                "I am proud to be a Latin American stake pool operator and the first pool in Colombia on the Cardano blockchain since Shelley lunch.",
                "Since then, I have maintained consistent operations, actively contributing to block validation and the growth of the Cardano ecosystem in the region."
              ]}
              headingDot={true}
            />
            <DottedImageWithText
              imageName="undraw_educator_6dgp"
              title="Blockchain Expertise"
              text={[
                "My stake pool is managed with extensive knowledge in blockchain technologies, decentralized systems, and Web3 innovation.",
                "With a strong commitment to professionalism, I ensure seamless pool operation, robust security measures, and the implementation of blockchain solutions. By leveraging my expertise, I aim to provide delegators with reliable rewards while fostering the growth and integrity of the blockchain ecosystem.",
              ]}
              headingDot={true}
            />
            <DottedImageWithText
              imageName="undraw_content-team_i066"
              title="Promoting Cardano Adoption in Latin America"
              text={[
                "I am dedicated to advancing Cardano adoption across Latin America by leading innovative projects that showcase the real-world potential of blockchain technology.",
                "Alongside these initiatives, I actively engage with the local community by providing educational content not only on blockchain but also on other emerging technologies such as AI and IoT. My mission is to foster a strong, inclusive community in the region, connected through technology and dedicated to driving innovation and accessibility."
              ]}
              headingDot={true}
            />

          </BoundaryBox>
        </BackgroundWrapper>
        <BackgroundWrapper id="moxiepool" backgroundType={"solidGrey"}>
          <VisionBox title={"MOXIEPOOL DATA"} />
          <BoundaryBox>
            <TableData />
          </BoundaryBox>
        </BackgroundWrapper>
        <BackgroundWrapper backgroundType={"zoom"}>
          <BoundaryBox>
            <ImageWithText
              id={"governance"}
              imageName={"purpose.png"}
              title={"GOVERNANCE"}
              subtitle={
                "MoxiePool announces that it has become a Delegate Representative (DRep) in Cardano!"
              }
              text={[
                "Decentralized governance is powered by the Voltaire phase in Cardano.",
                
                "We invite you to delegate your stake to MoxiePool and be part of the community-driven governance of the Cardano ecosystem. \
                Together, we can help shape the future of Cardano through decentralized decision-making.",

                <h2>MoxiePool Drep ID</h2>,
                <>
                drep1c3e65ewexytnyczk9aftyaktnf7srdzc5sjm9qcgjtdhjk6mwc5
                  <button onClick={() => handleCopy('drep1c3e65ewexytnyczk9aftyaktnf7srdzc5sjm9qcgjtdhjk6mwc5')} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, marginLeft: '8px' }}>
                     <ClipboardIcon className={styles.icon}/>
                  </button>
                </>,
                  <Link
                  className={clsx("button button--primary button--lg", styles.button)}
                  to="./blog/governance"
                  >
                    More on Governance and my Drep
                  </Link>

              ]}
              isImageRight={false}
            />
          </BoundaryBox>
        </BackgroundWrapper>
      </main>
    </Layout>
  );
}
