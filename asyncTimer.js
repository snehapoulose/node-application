function placeOrder(order, callback) {
    console.log(`Order placed: ${order}`);
    setTimeout(() => {
        callback(order);
    }, 2000); // Simulating order processing delay
}

function prepareOrder(order, callback) {
    console.log(`Preparing ${order}...`);
    setTimeout(() => {
        callback(order);
    }, 3000); // Simulating preparation time
}

function deliverOrder(order, callback) {
    console.log(`Delivering ${order}...`);
    setTimeout(() => {
        callback(order);
    }, 2000); // Simulating delivery time
}

// Initiating the order process
placeOrder('Pizza', (order) => {
    prepareOrder(order, (preparedOrder) => {
        deliverOrder(preparedOrder, (deliveredOrder) => {
            console.log(`Order delivered: ${deliveredOrder}! Enjoy your meal! 🍕`);
        });
    });
});
