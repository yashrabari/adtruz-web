import axios from 'axios';
const baseDomain = 'https://api.adtruz.com'; // API for products
export const basePostUrl = 'https://api.adtruz.com'; // API for post
export const baseStoreURL = 'https://api.adtruz.com'; // API for vendor(store)

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
