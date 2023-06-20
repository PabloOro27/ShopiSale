// funcion para calcular el total de los productos
export const totalPrice = (producs) => {
    let sum = 0;
    producs.forEach((product) => {
        sum += product.price;
    });
    return sum;
};