import { Deserializable } from "./deserializable.model";

export class Post implements Deserializable {
  hits: Array<any>;
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
