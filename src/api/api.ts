let url = "";

if (process.env.NODE_ENV === "development") {
    url = process.env.REACT_APP_LOCAL!
} else {
    url = process.env.REACT_APP_PROD!
}

export const getProducts = async () => {
    const response = await fetch(`${url}products`)
    const products = await response.json()

    return products
}