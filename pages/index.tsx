import Head from "next/head"
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  /*
  * NOTE: 静的生成 (build 時に生成される, Client には実行結果の HTML のみが渡る)
  * NOTE: getStaticProps は、 page ファイルのみから export できる
  **/
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*export async function getServerSideProps(context) {
  /!*
  * NOTE: サーバーサイドレンダリングするときは、 getStaticProps の代わりに
  *  getServerSideProps を export する
  *  - リクエスト時に呼び出される
  *  - context にリクエスト固有のパラメータが含まれている
  * *!/
  return {
    props: {
      // props for your component
    }
  }
}*/

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>友人家のちくわところも</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {id}
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}
