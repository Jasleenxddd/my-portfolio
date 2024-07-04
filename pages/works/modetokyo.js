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
        Ron-Quotes <Badge>2023</Badge>
      </Title>
      <P>
      Ron-Quotes is a beautifully designed frontend UI for a quotes application, aimed at delivering handpicked quote by Ron on the homepage which includes save quotes too.
      </P>


      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack </Meta>
          <span>React, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Website </Meta>
          <span> <Link href="https://ron-quotes-iota.vercel.app/">https://ron-quotes-iota.vercel.app/</Link></span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/rone1.png" alt="to-do list" />
     
      <WorkImage src="/images/works/rone2.png" alt="to-do list" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
