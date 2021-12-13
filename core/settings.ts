export default class Settings {
    
    public static APP_NAME = 'Web Forest'

    public static isProduction(): boolean {
        return process.env.NODE_ENV == 'production'
    }

    public static isDevelopment(): boolean {
        return process.env.NODE_ENV == `development`
    }

}