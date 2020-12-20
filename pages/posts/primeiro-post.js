import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function PrimeiroPost() {
  return (
    <Layout>
      <Head>
        <title>Primeiro Post!</title>
      </Head>
      <h1>Primeiro Post!</h1>
    </Layout>
  );
}
