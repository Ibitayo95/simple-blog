import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }: { allPostsData: any }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    A tiny blog about interesting things that I have learned,
                    written in plain english.
                </p>
                <Link href="/posts/first-post">Read about me...</Link>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(
                        ({
                            id,
                            date,
                            title,
                            tag,
                        }: {
                            id: string;
                            date: string;
                            title: string;
                            tag: string;
                        }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    {date}
                                </small>
                                <br />
                                <small
                                    className={utilStyles.lightText}
                                >{` ${tag}`}</small>
                            </li>
                        )
                    )}
                </ul>
            </section>
        </Layout>
    );
}
