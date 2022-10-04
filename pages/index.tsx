import type { NextPage } from 'next'
import Head from 'next/head'
import ButtonDefault from '../components/ButtonDefault/ButtonDefault'
import HeaderDefault from '../components/HeaderDefault/HeaderDefault'
import { HomeMainContainer, HomePageContainer, PersonaContainer, SloganContainer } from './styles'

const Home: NextPage = () => {

  return (
    <HomePageContainer>
      <Head>
        <title>IgnisFlix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMainContainer>
        <HeaderDefault isIconExists={false} />

        <SloganContainer>
          <h1 >Do sofá pro seu celular</h1>
          <h2>A revolução do cinema na sua casa.</h2>
        </SloganContainer>

        <PersonaContainer>
          <img src="/persona.svg" alt="" />
        </PersonaContainer>

        <ButtonDefault text={`Começar a ver filmes`} path={`login`} />

      </HomeMainContainer>


    </HomePageContainer>
  )
}

export default Home
