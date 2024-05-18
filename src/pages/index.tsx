import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Error</title>
        <meta name="description" content="Custom Error Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <nav>
            <div className={styles["mb-l"]}>
              <Link href="/locations">Locations</Link>
            </div>
            <div className={styles["mb-l"]}>
              <Link href="/characters">Characters</Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}
