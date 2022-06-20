export default class NewsDto {
  date!: string;
  title!: string;
  link!: string;
  imageUrl!: string;

  constructor(data: Partial<NewsDto>) {
    Object.assign(this, data);
  }
}
