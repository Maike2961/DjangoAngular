import { UUID } from "crypto"

export interface Curso{
    id?: UUID
    title:string,
    content:string,
    category:string
}