import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
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
          e <a href="https://github.com/JMustang">Github</a>
        </p>
        <p>
          Esse e um tutorial do Next.js{" "}
          <a href="https://nextjs.org/learn">(tutorial)</a>.
        </p>
      </section>
      <h2>
        <Link href="/posts/primeiro-post">
          <a>Back to Post</a>
        </Link>
      </h2>
    </Layout>
  );
}
