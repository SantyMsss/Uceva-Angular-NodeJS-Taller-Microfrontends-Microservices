import { Inventory } from "../interfaces/inventory.interface";

export const INVENTORY_MOCK: Inventory[] = [
    {
        id: 1,
        productId: 1,   
        productName: 'Portatil Dell XPS 13',
        quantity: 100,
        movements: 'entrada',
        lastUpdated: new Date('2024-06-01T12:00:00Z')
    },
    {   
        id: 2,
        productId: 2,
        productName: 'Smartphone Samsung Galaxy S21',
        quantity: 50,
        movements: 'salida',
        lastUpdated: new Date('2024-06-02T15:30:00Z')
    }

];