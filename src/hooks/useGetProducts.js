import { useEffect, useState } from 'react';

const useGetProducts = (APU) => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, []);

    return products;
}

export default useGetProducts;