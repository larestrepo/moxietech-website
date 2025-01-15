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
import Translate, {translate} from '@docusaurus/Translate';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <WelcomeHero
      title={siteConfig.title}
      description={
        <div>
            <p>
          <Translate id='mission'>
              With over two decades of experience in software development and industrial technology,
              MoxieTech is on a mission to become a leading specialist in solutions on Cardano blockchain.
          </Translate>
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
      title={translate({
        id: 'homepage.layout.title',
        message: 'Home',
        description: 'Title of the home page',
      })}
      description={translate({
        id: 'homepage.layout.description',
        message: 'We are a software and technology company specializing in blockchain solutions. Our mission is to build a better world through blockchain technology.',
        description: 'Description of the home page',
      })}>
      <HomepageHeader />
      <div></div>
      <main>
        <BackgroundWrapper backgroundType={"zoom"}>
            <BoundaryBox>

            <Divider text={translate({ id: 'moxiepool', message: 'MOXIEPOOL' })} />

            <DottedImageWithText
              imageName="undraw_engineering-team_13ax"
              title={<Translate>Latin American stake pool and first in Colombia</Translate>}
              text={[
                <Translate>I am proud to be a Latin American stake pool operator and the first pool in Colombia on the Cardano blockchain since Shelley lunch.</Translate>,
                <Translate>Since then, I have maintained consistent operations, actively contributing to block validation and the growth of the Cardano ecosystem in the region.</Translate>
              ]}
              headingDot={true}
            />
            <DottedImageWithText
              imageName="undraw_educator_6dgp"
              title={<Translate>Blockchain Expertise</Translate>}
              text={[
              <Translate>My stake pool is managed with extensive knowledge in blockchain technologies, decentralized systems, and Web3 innovation.</Translate>,
              <Translate>With a strong commitment to professionalism, I ensure seamless pool operation, robust security measures, and the implementation of blockchain solutions. By leveraging my expertise, I aim to provide delegators with reliable rewards while fostering the growth and integrity of the blockchain ecosystem.</Translate>,
              ]}
              headingDot={true}
            />
            <DottedImageWithText
              imageName="undraw_content-team_i066"
              title={<Translate>Promoting Cardano Adoption in Latin America</Translate>}
              text={[
              <Translate>I am dedicated to advancing Cardano adoption across Latin America by leading innovative projects that showcase the real-world potential of blockchain technology.</Translate>,
              <Translate>Alongside these initiatives, I actively engage with the local community by providing educational content not only on blockchain but also on other emerging technologies such as AI and IoT. My mission is to foster a strong, inclusive community in the region, connected through technology and dedicated to driving innovation and accessibility.</Translate>
              ]}
              headingDot={true}
            />

            </BoundaryBox>
        </BackgroundWrapper>
        <BackgroundWrapper id="moxiepool" backgroundType={"solidGrey"}>
          <VisionBox title={<Translate>MOXIEPOOL DATA</Translate>} />
          <BoundaryBox>
            <TableData />
          </BoundaryBox>
        </BackgroundWrapper>
        <BackgroundWrapper backgroundType={"zoom"}>
            <BoundaryBox>
            <ImageWithText
              id={"governance"}
              imageName={"purpose.png"}
              title={<Translate>GOVERNANCE</Translate>}
              subtitle={
              <Translate>
                MoxiePool announces that it has become a Delegate Representative (DRep) in Cardano!
              </Translate>
              }
              text={[
              <Translate>Decentralized governance is powered by the Voltaire phase in Cardano.</Translate>,
              
              <Translate>
                We invite you to delegate your stake to MoxiePool and be part of the community-driven governance of the Cardano ecosystem. 
                Together, we can help shape the future of Cardano through decentralized decision-making.
              </Translate>,

              <h2><Translate>MoxiePool Drep ID</Translate></h2>,
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
                <Translate>More on Governance and my Drep</Translate>
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
