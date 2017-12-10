import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Wrapper from 'src/common/components/Wrapper';
import ContentContainer from 'src/common/components/ContentContainer';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import Margin from 'src/common/components/Margin';
import Section from 'src/common/components/Section';
import Facts from 'src/common/components/Facts';

// containers
import SubscribeSection from 'src/common/containers/SubscribeSection';

// lib
import MainScreen from './lib/MainScreen';
import NumbersQuote from './lib/NumbersQuote';
import WavesClient from './lib/WavesClient';
import Wallet from './lib/Wallet';
import DEX from './lib/DEX';
import IssuingTokens from './lib/IssuingTokens';
import PlannedFeatures from './lib/PlannedFeatures';
import JoinUs from './lib/JoinUs';
import Audience from './lib/Audience';
import UserCases from '../../components/UserCases';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ initialState, classes }) => (
  <Layout activeLink="home">
    <BackgroundMainScreen
      type="image"
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
    >
      <ContentContainer>
        <MainScreen />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={3} bottom={2}>
        <ContentContainer>
          <NumbersQuote dexData={initialState.dexData} />
        </ContentContainer>
      </Section>

      <Section bottom={2}>
        <ContentContainer>
          <Audience />
        </ContentContainer>
      </Section>

      <Section size={4} className={classes.bgBlack}>
        <ContentContainer>
          <WavesClient />
        </ContentContainer>
      </Section>

      <Section top={4} bottom={1} className={classes.bgWallet}>
        <ContentContainer>
          <Wallet />
        </ContentContainer>
      </Section>

      <Section top={4} className={classes.bgBlack}>
        <ContentContainer>
          <DEX />
        </ContentContainer>
      </Section>

      <Section size={5}>
        <ContentContainer>
          <IssuingTokens />
        </ContentContainer>
      </Section>

      <UserCases />

      <Section size={4}>
        <ContentContainer>
          <Facts tokens={initialState.dexData.dexAssets} />
        </ContentContainer>
      </Section>

      <Section size={2}>
        <ContentContainer>
          <PlannedFeatures />
        </ContentContainer>
      </Section>

      <Section top={2} bottom={1} className={classes.bgJoinUs}>
        <ContentContainer>
          <JoinUs />
          <Margin bottom={5} />
          <br/>
          <Margin top={5} />
          <SubscribeSection />
        </ContentContainer>
      </Section>

    </Wrapper>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = props => (
  <ThemeProvider>
    <Page {...props} />
  </ThemeProvider>
);

export default App;
