export default class Settings {
    
    public static APP_NAME = 'Web Forest'
    public static APP_URL = 'https://www.webforest.eco'

    public static isProduction(): boolean {
        return process.env.NEXT_PUBLIC_APP_ENV == 'production'
    }

    public static isDevelopment(): boolean {
        return process.env.NEXT_PUBLIC_APP_ENV == `development`
    }

}