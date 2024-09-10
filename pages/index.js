import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi Im Christian Dean I'm a Future Software Engineer </p>
        <hr></hr>
        <p>I am 20 Yrs Old, My Hobbies are Playing Badminton and Playing Video Games.</p>
        <p>My favorite Food is Lenggwa</p>
        <hr></hr>
        <p>I took IT Because it is one of my choice.</p>
        <hr></hr>
        <p>I expect to Lean on How to Code the Basics of Coding</p>
        <p>
          <hr></hr>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      <br></br>
            </section>
    </Layout>
  );
}