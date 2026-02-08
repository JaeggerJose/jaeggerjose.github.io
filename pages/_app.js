import { Provider } from "../components/ui/provider"
import Layout from "../components/layouts/main"
import Fonts from "../components/layouts/font"
import { GoogleAnalytics } from "@next/third-parties/google"

const Website = ({ Component, pageProps, router }) => {
    return (
        <Provider>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
            <GoogleAnalytics gaId="G-N0YQWYT632" />
        </Provider>
    )
}
export default Website
