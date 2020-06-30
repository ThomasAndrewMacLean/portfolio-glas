import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { getDataFromAirtable } from '../utils';

import { T, Image, Layout } from '../components';
import { TranslationContext, PictureContext } from '../utils/contexts';

const WorkPage = ({ translations, pics }) => {
  return (
    <PictureContext.Provider value={pics}>
      <TranslationContext.Provider value={translations}>
        <Layout page="work">
          <Section>
            <h3
              className="text"
              dangerouslySetInnerHTML={{
                __html: marked(pics.find((p) => p.id === 'PENE').name),
              }}
            ></h3>
            <span
              className="text"
              dangerouslySetInnerHTML={{
                __html: marked(pics.find((p) => p.id === 'PENE').description),
              }}
            ></span>
            {pics
              .find((p) => p.id === 'PENE')
              .pic.map((z, i) => {
                return <Image key={i} picIndex={i} imageKey="PENE"></Image>;
              })}
          </Section>
        </Layout>
      </TranslationContext.Provider>
    </PictureContext.Provider>
  );
};

const Section = styled.section`
  img {
    display: flex;
    width: 100%;
    margin: 2rem 0;
  }
  border-bottom: 1px solid var(--light-grey);
  padding: 4rem 0;

  .text {
    font-weight: 100;
    margin-right: 2rem;
  }
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return { props: data };
};

export default WorkPage;
