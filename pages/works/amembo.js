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
  <Layout title="React-workflow">
    <Container>
      <Title>
        Text-Utils <Badge></Badge>
      </Title>

      <P>
           A react based text transformation web application.
      </P>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, CSS, JavaScript </span>
        </ListItem>

        <ListItem>
          <Meta>Last update</Meta>
          <span>2023</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://text-utils-aradhu74.vercel.app/">
            Text-Utils <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>






      <WorkImage src="/images/works/text-utils1.png" alt="Text-Utils" />
      <WorkImage src="/images/works/text-utils2.png" alt="Text-Utils" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
