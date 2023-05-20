let url = "";

if (process.env.NODE_ENV === "development") {
    url = process.env.REACT_APP_LOCAL!
} else {
    url = process.env.REACT_APP_PROD!
}

export const getRouters = async () => {
    const response = await fetch(`${url}products/routers`)
    const products = await response.json()

    return products
}

export const getSwitches = async () => {
    const response = await fetch(`${url}products/switches`)
    const products = await response.json()

    return products
}

export const getGateways = async () => {
    const response = await fetch(`${url}products/gateways`)
    const products = await response.json()

    return products
}

export const getProducts = async () => {
    const response = await fetch(`${url}products`)
    const products = await response.json()

    return products
}