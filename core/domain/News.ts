export default class News {

    photoUrl!: string
    title!: string
    date!: string
    link!: string

    constructor(data: Partial<News>) {
        Object.assign(this,data)
    }

}