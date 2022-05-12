import { useEffect, useState } from "react";
import { getPurchaseOrders, getOrderDetails, getCustomers } from "./utils";

import PurchaseOrderGrid from './PurchaseOrderGrid';

const PurchaseOrderDisplay = () => {
    const [orders, saveOrders] = useState([]);
    const [orderDetails, saveOrderDetails] = useState([]);
    const [customers, saveCustomers] = useState([]);

    useEffect(() => {
        //Using IIFEs to safely run async function inside useEffect function
         (async () => {
             if(orders.length === 0) {
                 const purchaseOrders = await getPurchaseOrders();
                 saveOrders(purchaseOrders);
             }
        })();
        (async () => {
            if(orderDetails.length === 0) {
                const details = await getOrderDetails();
                saveOrderDetails(details);
            }
        })();
        (async () => {
            if(customers.length === 0) {
                const customerList = await getCustomers();
                saveCustomers(customerList);
            }
        })();
    }, [orders, orderDetails, customers]);

    const hasLoaded = orders.length > 0 && orderDetails.length > 0;

    return hasLoaded ? 
            <PurchaseOrderGrid orders={orders} orderDetails={orderDetails} customers={customers} /> : 
            <div>Loading Order Data</div> ;
}

export default PurchaseOrderDisplay;