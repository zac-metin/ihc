import data from '../data.json';

import { calculateSalesPrice } from './utils';

describe('SalesPriceValue', () => {
    it('Should calculate the correct Sales Price for Order 1', () => {
        expect(calculateSalesPrice(data, 1)).toEqual(500.03 + 65.93 * 4);
    })
    it('Should calculate the correct Sales Price for Order 2', () => {
        expect(calculateSalesPrice(data, 2)).toEqual(0);
    })
})