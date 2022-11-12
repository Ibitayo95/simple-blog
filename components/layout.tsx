import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import bg from "../public/images/background.jpg";

const name = "ibi";
export const siteTitle = "ibi's blog";

export default function Layout({ children, home }: any) {
    return (
        <div
            className={styles.container}
            // style={{
            //     backgroundImage: `url(${bg.src})`,
            //     width: "100%",
            //     height: "100%",
            // }}
        >
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="ibi's personal blog" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <div className={utilStyles.headingLg}>
                            <h2 className={utilStyles.colorInherit}>
                                <Link href="/">{name}</Link>
                            </h2>
                        </div>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <h2>
                        <Link href="/">← Back to home</Link>
                    </h2>
                </div>
            )}
        </div>
    );
}
