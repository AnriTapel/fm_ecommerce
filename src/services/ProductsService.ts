import { Config } from "../models/Config";
import { IProduct } from "../models/Product";

export function fetchAllProsucts(): Promise<IProduct[]> {
    return new Promise<IProduct[]>(async (res, rej) => {
        try {
            let response: Response = await fetch('/data/exampleData.json');
            let json: Config = await response.json();
            res(json.result.products);
        } catch (e: any) {
            rej(e);
        }

    });
}