import {
  Container,
  Badge,
 
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="File-Share">
    <Container>
      <Title>
      File-Share <Badge>2023</Badge>
      </Title>
      <P>
        File-sharing mern based web application.
      </P>
      <P>
        {/* <Link href="https://room-vc.herokuapp.com/" target="_blank">
          VC-ROOM <ExternalLinkIcon mx="2px" />
        </Link> */}
        I developed the entire project from scratch. It is a file sharing mern app . This App uses mongodb as database to store the files uploaded here in the database.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Git Repo</Meta>
          <span>
         
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
           React / Node.js / MongoDB / JavaScript
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Video</Meta>
          <Link href="https://www.youtube.com/watch?v=GznmPACXBlY">
            How I built a software agency website with Next.js + Tailwind CSS
            (in nature) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

    

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      {/* <WorkImage src="/images/works/vc-room_01.png" alt="VC-ROOM" /> */}
      <WorkImage src="/images/works/file-share1.png" alt="File-share" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
