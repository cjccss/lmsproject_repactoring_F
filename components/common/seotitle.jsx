import Head from "next/head";


export default function SeoTitle({title}) {
    return(
        <Head>
            <title>{title} | 쌍용대학교</title>
        </Head>
    );
}