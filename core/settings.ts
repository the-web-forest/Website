export default class Settings {
    
    public static APP_NAME = 'Web Forest'
    public static APP_URL = 'https://www.webforest.eco'
    public static FACEBOOK_URL = 'https://facebook.com'
    public static INSTAGRAM_URL = 'https://www.instagram.com/web_forest'
    public static LINKEDIN_URL = 'https://www.linkedin.com/company/77021618'

    public static isProduction(): boolean {
        return process.env.NEXT_PUBLIC_APP_ENV == 'production'
    }

    public static isDevelopment(): boolean {
        return process.env.NEXT_PUBLIC_APP_ENV == `development`
    }

    public static getGoogleTagKey(): string { 
        return process.env.NEXT_GOOGLE_TAG_KEY!
    }

}