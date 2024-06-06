import {

  Container,
  Badge,
  
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PaperLink">
    <Container>
      <Title>
        IntelliBot <Badge>2023</Badge>
      </Title>
      <P>
      A react based fully responsive frontend design.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span> TailwindCSS, Node.js, Reactjs, vite</span>
        </ListItem>
        <ListItem>
         
        </ListItem>

      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>



      <WorkImage
        src="/images/works/intellibot1.png"
        alt="walknote"
      />
      <WorkImage src="/images/works/intellibot2.png" alt="intellibot" />
      <WorkImage src="/images/works/intellibot3.png" alt="intellibot" />
      <WorkImage src="/images/works/intellibot4.png" alt="intellibot" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
