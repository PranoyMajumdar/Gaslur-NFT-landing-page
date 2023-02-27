interface AuctionItemType {
    image: string;
    title: string;
    weth: string;
    endsIn: string;
}
export const hotAuctionsItems: Array<AuctionItemType> = [
    {image: '/nft-1.png', title: "Lorem Ipsum", weth: "1.20", endsIn: "01.34.45"},
    {image: '/nft-2.png', title: "Dolor sit amet", weth: "0.21", endsIn: "01.34.45"},
    {image: '/nft-3.png', title: "Dignissim curabitu..", weth: "1.34", endsIn: "01.34.45"},
    {image: '/nft-4.png', title: "Amet pellentesq..", weth: "2.98", endsIn: "01.34.45"},
]