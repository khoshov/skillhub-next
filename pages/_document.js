import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-YWDC2FMRQM"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                            
                                gtag('config', 'G-YWDC2FMRQM');
                            `,
                        }}
                    />
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                            
                                ym(72355387, "init", {
                                    clickmap:true,
                                    trackLinks:true,
                                    accurateTrackBounce:true,
                                    webvisor:true
                                });
                            `,
                        }}
                    />
                    <noscript>
                        <div>
                            <img
                                src="https://mc.yandex.ru/watch/72355387"
                                style={{
                                    position: 'absolute',
                                    left: '-9999px',
                                }}
                                alt=""
                            />
                        </div>
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
