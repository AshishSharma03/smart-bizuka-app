import Document, { Html,Head, Main, NextScript } from "next/document";
import createEmotionCache from "../muiSrc/createEmotionCache";
import createEmotionServer from '@emotion/server/create-instance';
export default class _document extends Document{

    render(){

        return(<Html>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
        </Html>)
    }
}

_document.getInitialProps = async (ctx) => {
    
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
  
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });
  
    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));
  
    return {
      ...initialProps,
      emotionStyleTags,
    };
  };
