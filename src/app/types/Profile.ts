import { PortableTextBlock } from "sanity";
import { Social } from "./Social";
export type Profile={
    _id:string,
    name:string,
    smallBil:string,
    profession:string[],
    image:string,
    secondImage:string,
    bio:PortableTextBlock,
    Social:Social[]
}