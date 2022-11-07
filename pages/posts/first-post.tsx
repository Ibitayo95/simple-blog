import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Who is ibi</title>
                </Head>{" "}
                <h1>Ibitayo</h1>
            </div>
        </Layout>
    );
}
