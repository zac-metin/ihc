import './PurchaseOrderGrid.css';

const PurchaseOrderGrid = ({orders, orderDetails, customers}) => (
    <div className="purchaseOrderGrid">
        <div>Customer</div>
        <div>Total Cost Value</div>
        <div>Total Sales Value</div>
        {/* {customers.map(customer => <div>
            {customer.company}</div>)} */}
        {orders.map(order => 
            <>
                <div>{customers.find(customer => customer.id === Number(order.customer_id)).company}</div>
                <div>200</div>
                <div>203</div>
            </>
        )}
    </div>
)

export default PurchaseOrderGrid;