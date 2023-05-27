import ProductItem from 'components/ProductItem/ProductItem';
import { useSelector } from 'react-redux';
import { selectAllProducts, selectCurrentShop } from 'redux/shop/shopSelectors';
import s from './ProductsList.module.scss';

const ProductsList = () => {
    const products = useSelector(selectAllProducts);
    const filter = useSelector(selectCurrentShop);

    const filterProducts = (name) => {
        if (name === null) return products;
        return products.filter(item => item.shopName === name);
    }
    const filteredProducts = filterProducts(filter);

    return (
      <ul className={s.list}>
        {filteredProducts.map(({ id, price, name, img, shopName }) => (
          <ProductItem
            key={id}
            id={id}
            price={price}
            name={name}
            img={img}
            shopName={shopName}
          />
        ))}
      </ul>
    );
};

export default ProductsList;
