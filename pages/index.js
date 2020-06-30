import React from 'react';
import styled from 'styled-components';
import { getDataFromAirtable } from '../utils';

import { T, Image, Layout } from '../components';
import { TranslationContext, PictureContext } from '../utils/contexts';

const IndexPage = ({ translations, pics }) => {
  return (
    <PictureContext.Provider value={pics}>
      <TranslationContext.Provider value={translations}>
        <Layout page="home">
          <Section>
            <div className="text">
              <T translationKey="homeText"></T>
            </div>
            <Image imageKey="home" picIndex={0}></Image>
          </Section>
        </Layout>
      </TranslationContext.Provider>
    </PictureContext.Provider>
  );
};

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid var(--light-grey);
  padding: 4rem 0;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
  .text {
    font-weight: 100;
    margin-right: 2rem;

    margin-bottom: 2rem;
  }
  img {
    object-fit: cover;
    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return { props: data };
};

export default IndexPage;
