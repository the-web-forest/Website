export default class RowData {

    date!: Date
    description!: string
    type!: string
    value!: string
    receipt!: string | null

    constructor(data: Partial<RowData>) {
        Object.assign(this, data)
    }

}