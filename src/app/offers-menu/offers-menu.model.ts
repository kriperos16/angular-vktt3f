export class Offer {
  public title: string;
  public imagePath: string;
  public location: string;
  public content: string;
  public rate: number;
  public description: string;

  constructor(
    title: string,
    imagePath: string,
    location: string,
    content: string,
    rate: number,
    desc: string
  ) {
    this.title = title;
    this.imagePath = imagePath;
    this.location = location;
    this.content = content;
    this.rate = rate;
    this.description = desc;
  }
}
