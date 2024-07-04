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
         NoteBook<Badge>2023</Badge>
        </Title>
        <P>
        This is a simple web application designed to help users jot down and organize their notes digitally. It provides an intuitive interface for creating, editing, and deleting notes conveniently.        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, JavaScript, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://note-book-rose.vercel.app/">
            https://note-book-rose.vercel.app/<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
  
  
        <WorkImage src="/images/works/not1.png" alt="STYLY" />
        <WorkImage src="/images/works/not2.png" alt="STYLY" />

  
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  