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
        NewsApp <Badge>2023</Badge>
      </Title>
      <P>
      This app provides recent news designed using React.
      </P>


      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack </Meta>
          <span>React, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Git link </Meta>
          <span> <Link href="https://github.com/Jasleenxddd/news-app">https://github.com/Jasleenxddd/news-app</Link></span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/poke1.png" alt="to-do list" />
         </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
