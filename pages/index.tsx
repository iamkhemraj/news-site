import Head from "next/head";
import Layout from "../components/Layout";

export default function Home(){

  return (  
    <>
      <Head>
          <title>Create News site</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className="news__section">
          <Layout>
              inside layout.
          </Layout>
      </div>
    </>
  );
}