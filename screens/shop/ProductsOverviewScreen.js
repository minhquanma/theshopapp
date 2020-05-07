import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { addToCart } from '../../store/actions/cart';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(data) => (
        <ProductItem
          title={data.item.title}
          image={data.item.imageUrl}
          price={data.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: data.item.id,
              productTitle: data.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(addToCart(data.item));
          }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
