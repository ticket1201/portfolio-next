import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';


export default function Home() {
    return (
        <>
            <Head>
                <title>Anton Metlitsky - Frontend developer. Happy to create web apps for you.</title>
            </Head>
            <Layout>
                <Hero/>
            </Layout>
        </>
    )
}
