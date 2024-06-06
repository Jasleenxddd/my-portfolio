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
        To-Do list <Badge>2023</Badge>
      </Title>
      <P>It is a to-do list web app which lists your daily tasks.It is based on react and used to list user&apos;s daily basis tasks.</P>


      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack </Meta>
          <span>React / CSS / JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Website </Meta>
          <span> <Link href="https://things-lister.netlify.app/">Click here</Link></span>
        </ListItem>
        <ListItem>
          <Meta>Repository </Meta>
          <span> <Link href="https://github.com/AradhyaDixit18/to-do-list">Click here</Link></span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/to-do1.png" alt="to-do list" />
     
      <WorkImage src="/images/works/to-do2.png" alt="to-do list" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
