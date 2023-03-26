import { Config } from "../models/Config";
import { Product } from "../models/Product";

export function fetchAllProsucts(): Promise<Product[]> {
    return new Promise<Product[]>(async (res, rej) => {
        try {
            let response: Response = await fetch('/data/exampleData.json');
            let json: Config = await response.json();
            res(json.result.products);
        } catch (e: any) {
            rej(e);
        }

    });
}