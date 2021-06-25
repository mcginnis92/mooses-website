import Navigation from "./navigation";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Contact = () => (
    <div className={styles.container}>
        <Head>
            <title>{`Contact Moose`}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navigation />
            <main className={styles.main}>
                <h1>
                    {`Contact Moose`}
                </h1>
                <p>{'Send me a treat!'}</p>
            </main>
        </div>
    </div>
);

export default Contact;