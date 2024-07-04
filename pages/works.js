import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import tube1 from '../public/images/works/tube1.png'
import poke1 from '../public/images/works/poke1.png'
import news1 from '../public/images/works/news1.png'
import talk4 from '../public/images/works/talk4.png'
import gym1 from '../public/images/works/gym1.png'
import myn1 from '../public/images/works/myn1.png'
import page1 from '../public/images/works/page1.png'
import not1 from '../public/images/works/not1.png'
import tex1 from '../public/images/works/tex1.png'
import rone2 from '../public/images/works/rone2.png'

const Works = () => (
  <Layout title="Works">
    <Container>
    <Section delay={0.2}>
        

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="EVOGYM-Fitness" thumbnail={gym1}>
          This project implements a comprehensive application designed to help users achieve their fitness goals. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Talkative-chat-app"
            thumbnail={talk4}
          >
            Talkative is a full-stack chatting web application with a perfect and smooth user interface.     
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pichu2" title="MyTube" thumbnail={tube1}>
          This project is an online video player application. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="styly"
            title="MyMyntra"
            thumbnail={myn1}
          >
          This is a Myntra clone application with all the functionalities.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="clvrBook"
            title="CleverBooks"
            thumbnail={page1}
          >
            A react based fully responsive frontend UI.
            </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ntbk"
            title="NoteBook"
            thumbnail={not1}
          >
          This app is a Notes making app for taking notes.
          </WorkGridItem>
        </Section>
        </SimpleGrid>


      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          Old Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={tex1} title="Text-Utils">
          A web application designed to provide users with a variety of text manipulation utilities.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={rone2}
            title="Ron-Quotes"
          >
           A react based Quote generating web application.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="amembo"
            thumbnail={poke1}
            title="Pokemon"
          >
           A react based Pokemon Cards web application.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="fourpainters"
            thumbnail={news1}
            title="NewsApp"
          >
           This app provides recent news designed using React.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

     

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
