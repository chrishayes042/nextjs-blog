import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Navbar } from "../components/navBar";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={utilStyles.container}></div>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Chris. I'm a software engineer with a year of experience. I
          work professionally with Java. I'm learning full-stack development to
          become a more web based engineer. Follow my journey on this blog.
        </p>
      </section>
    </Layout>
  );
}
