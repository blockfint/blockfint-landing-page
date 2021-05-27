import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getSinglePost, getAllPosts } from '@blockfint/website/api/ghostCMS'
import { BlogDetail } from '@blockfint/website/containers/BlogDetail'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { PostOrPage } from '@tryghost/content-api'
// import { useRouter } from 'next/router'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogDetailPage: NextPage<{ post: PostOrPage; nextPosts: PostOrPage[] }> = ({ post, nextPosts }) => {
  // const {} = useRouter()

  if (post) {
    return (
      <>
        <Global />
        <Layout>
          <BlogDetail post={post} nextPosts={nextPosts} />
        </Layout>
      </>
    )
  }

  return (
    <>
      <Global />
      <Layout>
        <p>Loading</p>
      </Layout>
    </>
  )
}

export default BlogDetailPage

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const results = await getAllPosts()

  const paths = locales.flatMap((locale) =>
    results
      .map((post) => {
        console.log(post)
        try {
          const tags = post?.tags ?? []
          const slug = post?.slug ?? ''

          const mainTag = tags?.find(({ visibility }) => visibility === 'public') // find categories
          if (!mainTag) return null
          const { slug: slugTag } = mainTag
          return { params: { slug: [slugTag, slug] }, locale }
        } catch (error) {
          console.log(error)
          return null
        }
      })
      .filter((i) => i !== null)
  )
  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({ locale, params }) {
  const i18nContext = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)

  const [_, slug] = params.slug
  const post = await getSinglePost({ slug })
  const nextPosts = await getAllPosts({ filter: [`posts.slug:-${post.slug}`], limit: 6 })
  return {
    props: { ...i18nContext, post, nextPosts },
    revalidate: 5
  }
}
