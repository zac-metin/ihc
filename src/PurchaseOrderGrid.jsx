import './PurchaseOrderGrid.css';

import { 
    calculateSalesPrice, 
    calculateCostPrice 
} from './utils';

const PurchaseOrderGrid = ({orders, orderDetails, customers, items}) => (
    <div className="purchaseOrderGrid">
        <div>Customer</div>
        <div>Total Cost Value</div>
        <div>Total Sales Value</div>
        {orders.map(order => 
            <>
                <div>{customers.find(customer => customer.id === Number(order.customer_id)).company}</div>
                <div>{calculateSalesPrice({orders, order_details: orderDetails, customers, items}, order.id)}</div>
                <div>{calculateCostPrice({orders, order_details: orderDetails, customers, items}, order.id)}</div>
                
            </>
        )}
    </div>
)

export default PurchaseOrderGrid;