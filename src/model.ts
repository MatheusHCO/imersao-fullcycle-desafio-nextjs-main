export interface Post{
    id: string;
    title: string;
    text: string;
    image_url: string;
    slug: string;
    created_at: string;
}

export const posts: Post[] = [
    {
      id: 'uuid1',
      title: 'Post 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nulla eget ipsum lobortis imperdiet. Suspendisse facilisis est fermentum enim vulputate, eget vulputate quam semper. Pellentesque accumsan tortor vitae risus fermentum feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue fermentum ullamcorper. Praesent et velit nisi. Vestibulum libero lectus, tincidunt sed commodo sit amet, aliquam nec augue. Fusce eget enim facilisis arcu dignissim laoreet cursus a dolor. Vestibulum dapibus lacinia sapien, quis luctus quam ullamcorper eu.',
      image_url: 'https://source.unsplash.com/random?post,' + Math.random(),
      slug: 'post-1',
      created_at: '2022-08-18T20:00:00'
    },
    {
      id: 'uuid2',
      title: 'Post 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nulla eget ipsum lobortis imperdiet. Suspendisse facilisis est fermentum enim vulputate, eget vulputate quam semper. Pellentesque accumsan tortor vitae risus fermentum feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue fermentum ullamcorper. Praesent et velit nisi. Vestibulum libero lectus, tincidunt sed commodo sit amet, aliquam nec augue. Fusce eget enim facilisis arcu dignissim laoreet cursus a dolor. Vestibulum dapibus lacinia sapien, quis luctus quam ullamcorper eu.',
      image_url: 'https://source.unsplash.com/random?post,' + Math.random(),
      slug: 'post-2',
      created_at: '2022-08-18T20:00:00'
    },
    {
      id: 'uuid3',
      title: 'Post 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nulla eget ipsum lobortis imperdiet. Suspendisse facilisis est fermentum enim vulputate, eget vulputate quam semper. Pellentesque accumsan tortor vitae risus fermentum feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue fermentum ullamcorper. Praesent et velit nisi. Vestibulum libero lectus, tincidunt sed commodo sit amet, aliquam nec augue. Fusce eget enim facilisis arcu dignissim laoreet cursus a dolor. Vestibulum dapibus lacinia sapien, quis luctus quam ullamcorper eu.',
      image_url: 'https://source.unsplash.com/random?post,' + Math.random(),
      slug: 'post-3',
      created_at: '2022-08-18T20:00:00'
    },
    {
      id: 'uuid4',
      title: 'Post 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nulla eget ipsum lobortis imperdiet. Suspendisse facilisis est fermentum enim vulputate, eget vulputate quam semper. Pellentesque accumsan tortor vitae risus fermentum feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue fermentum ullamcorper. Praesent et velit nisi. Vestibulum libero lectus, tincidunt sed commodo sit amet, aliquam nec augue. Fusce eget enim facilisis arcu dignissim laoreet cursus a dolor. Vestibulum dapibus lacinia sapien, quis luctus quam ullamcorper eu.',
      image_url: 'https://source.unsplash.com/random?post,' + Math.random(),
      slug: 'post-4',
      created_at: '2022-08-18T20:00:00'
    },
    {
      id: 'uuid5',
      title: 'Post 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nulla eget ipsum lobortis imperdiet. Suspendisse facilisis est fermentum enim vulputate, eget vulputate quam semper. Pellentesque accumsan tortor vitae risus fermentum feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue fermentum ullamcorper. Praesent et velit nisi. Vestibulum libero lectus, tincidunt sed commodo sit amet, aliquam nec augue. Fusce eget enim facilisis arcu dignissim laoreet cursus a dolor. Vestibulum dapibus lacinia sapien, quis luctus quam ullamcorper eu.',
      image_url: 'https://source.unsplash.com/random?post,' + Math.random(),
      slug: 'post-5',
      created_at: '2022-08-18T20:00:00'
    },
    {
      id: 'uuid6',
      title: 'Post 6',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nulla eget ipsum lobortis imperdiet. Suspendisse facilisis est fermentum enim vulputate, eget vulputate quam semper. Pellentesque accumsan tortor vitae risus fermentum feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue fermentum ullamcorper. Praesent et velit nisi. Vestibulum libero lectus, tincidunt sed commodo sit amet, aliquam nec augue. Fusce eget enim facilisis arcu dignissim laoreet cursus a dolor. Vestibulum dapibus lacinia sapien, quis luctus quam ullamcorper eu.',
      image_url: 'https://source.unsplash.com/random?post,' + Math.random(),
      slug: 'post-6',
      created_at: '2022-08-18T20:00:00'
    }
  ]