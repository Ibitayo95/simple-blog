import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, getAllTags } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    const allTags = getAllTags();
    return {
        props: {
            allPostsData,
            allTags,
        },
    };
}

export default function Home({
    allPostsData,
    allTags,
}: {
    allPostsData: any;
    allTags: any;
}) {
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
            </section>
            <section>
                <hr />
                {allTags.map(({ tag }: { tag: string }) => {
                    return (
                        <div className={utilStyles.tags} key={tag}>
                            <Link href={`/tags/${tag}`}>{tag}</Link>
                        </div>
                    );
                })}
                <hr />
            </section>
            <div className={utilStyles.bottomContainer}>
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
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
                                    <div className={utilStyles.headingLg}>
                                        <Link href={`/posts/${id}`}>
                                            {title}
                                        </Link>
                                    </div>
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
            </div>
        </Layout>
    );
}
