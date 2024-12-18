import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BackgroundWrapper from '@site/src/components/Layout/BackgroundWrapper';
import BoundaryBox from '@site/src/components/Layout/BoundaryBox';
import FeaturedTitleWithText from '@site/src/components/Layout/FeaturedTitleWithText';
import WelcomeHero from '../components/WelcomeHero';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <WelcomeHero
      title={siteConfig.title}
      description="Moxietech is technology company that specializes in blockchain technology. We are currently working on a Cardano stake pool called MoxiePool."
    />
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="MoxieTech website to promote MoxiePool and Cardano blockchain.">
      <HomepageHeader />
      <main>
        <BackgroundWrapper backgroundType={"zoom"}>
          <BoundaryBox>
          <FeaturedTitleWithText
              title="Our World Is Changing. Together, We Can Change It For The Better."
              description={[
                "Cardano is a proof-of-stake blockchain platform: the first to be founded on [peer-reviewed research](/research) \
                and developed through evidence-based methods. It combines pioneering technologies \
                to provide unparalleled security and sustainability to decentralized applications, systems, \
                and societies.",

                "With a leading team of engineers, Cardano exists to redistribute power from unaccountable \
                structures to the margins – to individuals – and be an enabling force for positive change and progress.",
              ]}
              quote={[
                "A History Of Impossible,",
                <br key="line1" />, /* FIXME: too hacky */
                "Made Possible",
              ]}
              buttonLabel="Use Cases"
              buttonLink="/use-cases"
              headingDot={true}
            />

          </BoundaryBox>
        </BackgroundWrapper>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
