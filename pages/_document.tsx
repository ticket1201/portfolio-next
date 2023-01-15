import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                <link rel="icon" href="./laptop-code-solid.svg"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="Portfolio"
                    content="This website created for demonstrate projects."
                />
                <link rel="apple-touch-icon" href="./laptop-code-solid.svg"/>
                <meta name="title" content="Anton Metlitsky - Frontend developer. Happy to create web apps for you."/>
                <meta name="description"
                      content="Anton Metlitsky - creative Frontend developer living in Tbilisi and happy to make your pages look awesome."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://metlitsky.com/"/>
                <meta property="og:title"
                      content="Anton Metlitsky - Frontend developer. Happy to create web apps for you."/>
                <meta property="og:description"
                      content="Anton Metlitsky - creative Frontend developer living in Tbilisi and happy to make your pages look awesome."/>
                <meta property="og:image" content="%PUBLIC_URL%/logoforsocials.jfif"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://metlitsky.com/"/>
                <meta property="twitter:title"
                      content="Anton Metlitsky - Frontend developer. Happy to create web apps for you."/>
                <meta property="twitter:description"
                      content="Anton Metlitsky - creative Frontend developer living in Tbilisi and happy to make your pages look awesome."/>
                <meta property="twitter:image" content="./logoforsocials.jfif"/>
            </Head>
            <body style={{margin:0}}>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
