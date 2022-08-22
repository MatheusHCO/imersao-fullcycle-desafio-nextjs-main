import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Button } from '@material-ui/core'
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import http from '../../../http';
import { Post } from '../../../model';

interface PostDetailPageProps {
    post: Post
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({post}) => {
  return (
    <div>
      <Head>
        <title>Blog - {post.title}</title>
      </Head>


    <Card>
        <CardHeader 
            title={post.title.toUpperCase()}
        />
        <CardMedia style={{paddingTop: '15%'}} image={post.image_url} />
        <CardContent>
            <Typography component="h2" variant="h5" gutterBottom>
                {post.text}
            </Typography>
        </CardContent>
    </Card>
    </div>
  )
}

export default PostDetailPage

export const getServerSideProps: GetServerSideProps<PostDetailPageProps, {slug:string}> = async (context) => {
  const {slug} = context.params!;
  try {

    const {data: post} = await http.get(`posts/${slug}`);
    return {
        props: {
            post
        }
    }
  } catch(e) {
    if(axios.isAxiosError(e) && e.response?.status === 404) {
        return {notFound: true}
    }
    throw e;
  }
}

// export const getStaticPaths: GetStaticPaths = async(context) => {
//   const {data: posts} = await http.get('posts');
//   const paths = posts.map((p: Post) => ({
//     params: {slug: p.slug}
//   }))

//   return { paths, fallback: 'blocking'}
// }