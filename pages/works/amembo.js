import {
  Container,
  Badge,
  List,
  ListItem,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Link from 'next/link'

const Work = () => (
  <Layout title="File-share">
    <Container>
      <Title>
        Pokemon Cars <Badge>2023</Badge>
      </Title>
      <P>
      Pokemon is a frontend UI which displays various pokemon cards and a search functionality to search them.
      </P>


      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack </Meta>
          <span>React, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Website </Meta>
          <span> <Link href="https://pokemon-ass.vercel.app/">https://pokemon-ass.vercel.app/</Link></span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/poke1.png" alt="to-do list" />
         </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
