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
       VR Web Design <Badge>2024</Badge>
      </Title>
      <P>
       This is figma design of a VR based website which highlights the features of next generation of virtual reality.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.figma.com/design/81Y67thWJ976gcAxCzddVt/Desktop-Design?node-id=0-1&t=mGbTFEAMq0mtcdff-1">
            Design <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>



      <WorkImage src="/images/works/VR1.png" alt="STYLY" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
