const workData: WorkDataInterface[] = [
  {
    title: "BBC micro:bit",
    link: "work/microbit",
    subTitle:
      "Rebuilding the webapp that will change the world through education. Meet micro:bit, tiny programmable computer, designed to make learning and teaching easy and fun!",
    image: require("../../assets/image/microbit.png"),
    imageAlt: "Screenshot of microbit.org website",
    techUsed: ["react", "gatsby", "typescript", "sanity cms", "graphQL"],
  },
  {
    title: "Dixons Carphone",
    link: "work/dixons-carphone",
    subTitle:
      "Providing analytics support for one the largest multinational consumer electrical and mobile retailer and service company based in London, UK.",
    image: require("../../assets/image/dixonscarphone.png"),
    imageAlt: "Screenshot of currys.co.uk website",
    techUsed: ["react", "redux", "javascript", "adobe dtm", "adobe launch"],
  },
]

export { workData }

export interface WorkDataInterface {
  title: string
  link: string
  subTitle: string
  image: string
  imageAlt: string
  techUsed: string[]
}
