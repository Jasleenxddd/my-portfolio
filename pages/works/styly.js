import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="VR Web Design">
    <Container>
      <Title>
       MyMyntra<Badge>2024</Badge>
      </Title>
      <P>
      This project is a clone of the popular e-commerce website Myntra. It replicates key features and functionalities, including product listings, detailed product pages, user authentication, and more. The primary goal of this project is to demonstrate proficiency in frontend development and to create a visually appealing and user-friendly application.      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript, TailwindCSS, Axios, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://my-myntra-five.vercel.app/">
          https://my-myntra-five.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>



      <WorkImage src="/images/works/myn1.png" alt="STYLY" />
      <WorkImage src="/images/works/myn2.png" alt="STYLY" />
      <WorkImage src="/images/works/myn3.png" alt="STYLY" />
      <WorkImage src="/images/works/myn4.png" alt="STYLY" />
      <WorkImage src="/images/works/myn5.png" alt="STYLY" />
      <WorkImage src="/images/works/myn6.png" alt="STYLY" />

      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
