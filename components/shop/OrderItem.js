import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import CartItem from '../../screens/shop/CartItem';

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
        <Button
          color={Colors.primary}
          title={showDetails ? "Show Details" : "Hide Details"}
          onPress={() => {
            setShowDetails((prevState) => !prevState);
          }}
        />
        {showDetails && (
          <View style={styles.detailItems}>
            {props.items.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                quantity={cartItem.quantity}
                amount={cartItem.sum}
                title={cartItem.title}
              />
            ))}
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },
  totalAmount: {
    fontFamily: 'OpenSansBold',
    fontSize: 16
  },
  date: {
    fontSize: 16,
    fontFamily: 'OpenSans',
    color: '#888'
  },
  detailItems: {
    width: '100%'
  }
});

export default OrderItem;
