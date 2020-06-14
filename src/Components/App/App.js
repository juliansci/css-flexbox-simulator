import React from 'react';
import { AppLayout, HeaderLayout, ContentLayout, SimulatorLayout, ActionLayout, FooterLayout } from './styled';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <AppLayout>
      <HeaderLayout>
        <Header/>
      </HeaderLayout>
      <ContentLayout>
        <ActionLayout>
          Action Layout
        </ActionLayout>
        <SimulatorLayout>
          Simulator Layout
        </SimulatorLayout>
      </ContentLayout>
      <FooterLayout>
        <Footer/>
      </FooterLayout>
        
    </AppLayout>
  );
}

export default App;
