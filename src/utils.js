require('isomorphic-fetch');

export const getPurchaseOrders = async () => await getDataByType('orders');

export const getOrderDetails = async () => await getDataByType('order_details');

export const getCustomers = async () => await getDataByType('customers');

export const getDataByType = (type) => fetchEntity(type);

export const getSalePrice = (items, item_id) => items.find(item => item.id === item_id)?.sale_price;

export const calculateSalesPrice = (data, orderId) => {
    const { order_details, items } = data;
    const orderDetails = order_details.filter(order => order.order_id === orderId);

    return orderDetails.reduce((prev, current) => 
        getSalePrice(items, current.item_id) * current.quantity + prev, 0);
}

export const fetchEntity = (entity) => 
fetch(`http://localhost:3001/${entity}`)
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response
    })
    .then((response) => {
        return response.json()
    });

