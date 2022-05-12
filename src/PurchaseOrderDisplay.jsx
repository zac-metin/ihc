import { useEffect, useState } from "react";
import { getPurchaseOrders, getOrderDetails, getCustomers, getItems } from "./utils";

import PurchaseOrderGrid from './PurchaseOrderGrid';

const PurchaseOrderDisplay = () => {
    const [orders, saveOrders] = useState([]);
    const [orderDetails, saveOrderDetails] = useState([]);
    const [customers, saveCustomers] = useState([]);
    const [items, saveItems] = useState([]);

    useEffect(() => {
        //Using IIFEs to safely run async function inside useEffect function
         (async () => {
             if(orders.length === 0) saveOrders(await getPurchaseOrders());
        })();
        (async () => {
            if(orderDetails.length === 0) saveOrderDetails(await getOrderDetails());
        })();
        (async () => {
            if(customers.length === 0) saveCustomers(await getCustomers());
        })();
        (async () => {
            if(items.length === 0) saveItems(await getItems());
        })();
    }, [orders, orderDetails, customers, items]);

    const hasLoaded = [orders, orderDetails, customers, items].every(dataset => dataset.length > 0);

    return hasLoaded ? 
            <PurchaseOrderGrid orders={orders} orderDetails={orderDetails} customers={customers} items={items} /> : 
            <div>Loading Order Data</div> ;
}

export default PurchaseOrderDisplay;