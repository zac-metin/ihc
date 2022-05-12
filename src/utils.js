require('isomorphic-fetch');

export const getPurchaseOrders = async () => await getDataByType('orders');

export const getOrderDetails = async () => await getDataByType('order_details');

export const getCustomers = async () => await getDataByType('customers');

export const getDataByType = (type) => fetchEntity(type);

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

