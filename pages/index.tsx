import Head from "next/head";
import Layout from "../components/Layout";
import Homepage from "../components/Homepage";

export default function Home(){

  return (  
    <>
      <Head>
          <title>GET TIME</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Layout>
         <Homepage/>
      </Layout>
    </>
  );
}