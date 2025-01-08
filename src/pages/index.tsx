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
import Card from '../components/Layout/CardForData';
import AnchorIcon from '@site/static/img/icons/anchor.svg';
import PieIcon from '@site/static/img/icons/pie.svg';
import ArrowPointingIn from '@site/static/img/icons/arrow-pointing-in.svg';
import ArrowPointingOut from '@site/static/img/icons/arrow-pointing-out.svg';
import AdjustmentHorizontal from '@site/static/img/icons/adjustments-horizontal.svg';
import AdjustmentVertical from '@site/static/img/icons/adjustments-vertical.svg';
import ArrowUpTray from '@site/static/img/icons/arrow-up-tray.svg';
import ArrowUp from '@site/static/img/icons/arrow-up.svg';
import BriefCase from '@site/static/img/icons/briefcase.svg';
import CubeTransparent from '@site/static/img/icons/cube-transparent.svg';
import PresentationChart from '@site/static/img/icons/presentation-chart-bar.svg';
import BuidingOffice from '@site/static/img/icons/building-office.svg';
import BuidingOffice2 from '@site/static/img/icons/building-office-2.svg';
import ChartBar from '@site/static/img/icons/chart-bar.svg';
import Check from '@site/static/img/icons/check.svg';
import Clock from '@site/static/img/icons/clock.svg';
import UserCircle from '@site/static/img/icons/user-circle.svg';
import ArrowTurnLeftUp from '@site/static/img/icons/arrow-turn-left-up.svg';
import RayoAnimacion from '../components/RayoAnimacion';


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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
          <VisionBox title={"POOL DATA"} />
          <BoundaryBox>
            <div className={styles.container}>
              <div className={styles.column}>
                <table className={styles.dataTable}>
                  <tbody>
                    <tr>
                      <td className={styles.leftAlign}>
                        <AnchorIcon className={styles.icon} /> Ticker
                      </td>
                      <td className={styles.rightAlign}>MOXIE</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <PieIcon className={styles.icon} /> Saturation
                      </td>
                      <td className={styles.rightAlign}>0.67%</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <ArrowPointingIn className={styles.icon} /> Live Stake
                      </td>
                      <td className={styles.rightAlign}>504.53k₳</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <ArrowPointingOut className={styles.icon} /> Active Stake
                      </td>
                      <td className={styles.rightAlign}>504.15k₳</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <AdjustmentHorizontal className={styles.icon} /> Declared Pledge
                      </td>
                      <td className={styles.rightAlign}>87.00k₳</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <AdjustmentVertical className={styles.icon} /> Active Pledge
                      </td>
                      <td className={styles.rightAlign}>122.79k₳</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <ArrowUp className={styles.icon} /> Margin fee
                      </td>
                      <td className={styles.rightAlign}>2%</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <ArrowUpTray className={styles.icon} /> Fixed fee
                      </td>
                      <td className={styles.rightAlign}>340₳</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.column}>
                <table className={styles.dataTable}>
                  <tbody>
                    <tr>
                      <td className={styles.leftAlign}>
                        <ChartBar className={styles.icon} /> Recent ROA
                      </td>
                      <td className={styles.rightAlign}>0.363%</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <PresentationChart className={styles.icon} /> Lifetime ROA
                      </td>
                      <td className={styles.rightAlign}>3.92%</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <BriefCase className={styles.icon} /> Blocks in epoch
                      </td>
                      <td className={styles.rightAlign}>0</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <CubeTransparent className={styles.icon} /> Estimated Blocks in Whole Epoch
                      </td>
                      <td className={styles.rightAlign}>0.5</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <BuidingOffice className={styles.icon} /> Blocks Lifetime
                      </td>
                      <td className={styles.rightAlign}>832</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <Check className={styles.icon} /> Lifetime Luck
                      </td>
                      <td className={styles.rightAlign}>100.2%</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <Clock className={styles.icon} /> Created
                      </td>
                      <td className={styles.rightAlign}>31.7.2020</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <UserCircle className={styles.icon} /> Delegators
                      </td>
                      <td className={styles.rightAlign}>39</td>
                    </tr>
                    <tr>
                      <td className={styles.leftAlign}>
                        <ArrowTurnLeftUp className={styles.icon} /> Pledge leverage
                      </td>
                      <td className={styles.rightAlign}>5.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </BoundaryBox>
        </BackgroundWrapper>
      </main>
    </Layout>
  );
}
