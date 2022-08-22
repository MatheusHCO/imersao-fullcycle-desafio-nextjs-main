import { Typography } from '@material-ui/core'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Post } from "../model";
import Link from 'next/link'
import http from '../http';

interface PostsListPagePros {
  posts: Post[]
}

const PostsListPage: NextPage<PostsListPagePros> = ({posts}) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>


      <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        Index
      </Typography>

      <Link href="posts">
        Acessar blog
      </Link>
    </div>
  )
}

export default PostsListPage
