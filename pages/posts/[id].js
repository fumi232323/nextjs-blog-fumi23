import Date from "../../components/date";
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css"
import Head from "next/head";

export default function Post({ postData }) {
  // NOTE: これ、React コンポーネント
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{ postData.title }</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,  // 存在する paths の配列
    fallback: false  // あとで説明がでてくる
  }
}

// NOTE: {} 内のスペースは開けても開けなくても良いが、
//  linter, formatter などで、自動的にチェック整形して、
//  プロジェクト内で統一しているところが多い
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
