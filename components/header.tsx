import Head from "next/head";
import Settings from "../core/settings";

interface HeaderData {
    title?: string
}

const Header = (props: HeaderData) => {

    const getTitle = (): string => {

        let title = Settings.APP_NAME
        
        if(props.title) {
            title = `${props.title} - ${title}`
        }

        if(Settings.isDevelopment()) {
            title = `DEV - ${title}`
        }

        return title
    }

    return(
        <Head>
            <title>{getTitle()}</title>
            <meta name="description" content="Web Forest" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )

}

export default Header