import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          ola, meu nome é júnior, sou um Web Developer, você pode me achar nos
          meus perfis do{" "}
          <a href="https://www.linkedin.com/in/junior-carvalho-2760a5126/">
            Linkedin
          </a>{" "}
          e <a href="https://github.com/JMustang">Github</a>.
        </p>
        <p>
          Esse e um <a href="https://nextjs.org/learn">tutorial</a> do Next.js.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Postagens.</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, text }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              {text}
            </li>
          ))}
        </ul>
      </section>
      <h2>
        <Link href="/posts/primeiro-post">
          <a>Posts</a>
        </Link>
      </h2>
    </Layout>
  );
}
