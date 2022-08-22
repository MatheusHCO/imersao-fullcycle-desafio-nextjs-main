import { Card, CardContent, CardMedia, CardActions, Typography, Button, Grid } from '@material-ui/core'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import http from '../../http'
import { Post } from '../../model'

interface PostsListPagePros {
  posts: Post[]
}

const PostsListPage: NextPage<PostsListPagePros> = ({posts}) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>


      <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        Blog
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post, key) => (
          <Grid key={key} container item xs={12} sm={12} md={12}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardMedia style={{ paddingTop: '56%'}} image={post.image_url} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {post.text.substring(0,180)}...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="/posts/[slug]" as={`/posts/${post.slug}`} passHref>
                            <Button size="small" color="primary" component="a">Ler</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default PostsListPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {data: posts} = await http.get('posts');
  // console.log(posts)
  return {
    props: {
      posts: posts,
    }
  }
}