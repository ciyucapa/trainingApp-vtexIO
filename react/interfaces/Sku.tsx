import Seller from "./Seller";

interface Sku {
    ean: string;
    sellers: Seller[];
};

export default Sku;