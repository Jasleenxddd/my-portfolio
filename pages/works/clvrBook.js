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
         CleverBooks<Badge>2024</Badge>
        </Title>
        <P>
        This is a UI design built with a responsive design to ensure accessibility across various devices, from desktops to tablets and smartphones.        </P>
  
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
            <Link href="https://clever-books-landing-page-fawn.vercel.app/">
            https://clever-books-landing-page-fawn.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
  
  
        <WorkImage src="/images/works/page1.png" alt="STYLY" />
        <WorkImage src="/images/works/page2.png" alt="STYLY" />
        <WorkImage src="/images/works/page3.png" alt="STYLY" />
        <WorkImage src="/images/works/page4.png" alt="STYLY" />

  
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  