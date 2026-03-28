export interface PostResponseHttpData {
  posts: PostType[]
  total: number
  page: number
  limit: number
}

export interface PostType {
  id: number
  title: string
  content: string
  image: string
  authorId: number
  createdAt: string
  authorName: string
  likesCount: number
}
