import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import ebike1 from '../public/images/works/Ebike1.png'
import thumbVcRooom from '../public/images/works/file-share1.png'
import thumbModeTokyo from '../public/images/works/to-do1.png'
import textutils from '../public/images/works/text-utils1.png'
import intellibot1 from '../public/images/works/intellibot1.png'
import novafood1 from '../public/images/works/novafood1.png'
import webgl1 from '../public/images/works/webgl1.png'
import VR1 from '../public/images/works/VR1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
    <Section delay={0.2}>
        

        <Heading as="h3" fontSize={20} mb={4}>
          New Projects
        </Heading>
      </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Webgl-Simulation" thumbnail={webgl1}>
          This project implements a WebGL fluid simulation using a variety of modern web technologies, including React, Three.js, and various supporting libraries. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="NovaFood"
            thumbnail={novafood1}
          >
            NovaFood is a full-stack food ordering web application with a perfect and smooth user interface.     
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        

        <Heading as="h3" fontSize={20} mb={4}>
          Figma Projects
        </Heading>
      </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="pichu2" title="Ebike Design" thumbnail={ebike1}>
          This project highlights the EV-B ebike website design. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="styly"
            title="VR Web Design"
            thumbnail={VR1}
          >
          This is a VR Website design in Figma.
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
          <WorkGridItem id="margelo" thumbnail={thumbVcRooom} title="file-share">
          A MERN-stack based online file sharing web application.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="To-Do List"
          >
           A react based to-do list/ task managing web application.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="amembo"
            thumbnail={textutils}
            title="Text-Utils"
          >
           A react based text transformation web application.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="fourpainters"
            thumbnail={intellibot1}
            title="IntelliBot"
          >
           A react based fully responsive frontend design.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

     

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
