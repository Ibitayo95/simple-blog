import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import utilStyles from "../../styles/utils.module.css";
import { getAllTags, getSortedPostsData } from "../../lib/posts";
import Link from "next/link";

export async function getStaticPaths() {
    const paths = getAllTags().map((tagType) => {
        return {
            params: {
                tag: tagType.tag,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Tag({ allPostsData }: { allPostsData: any }) {
    const router = useRouter();
    const [routeTag, setRouteTag] = useState<string | string[]>();

    useEffect(() => {
        if (!router.isReady) return;
        setRouteTag(router.query.tag);
    }, [router.isReady, router.query.tag]);

    return (
        <Layout>
            {" "}
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>{routeTag}</h2>
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
                        }) =>
                            routeTag === tag ? (
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
                            ) : null
                    )}
                </ul>
            </section>
        </Layout>
    );
}
