/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Document, Page, StyleSheet, Text } from "@react-pdf/renderer";

function PdfComp({ items, total }) {
  const cartItems = items;
  console.log(cartItems);

  const styles = StyleSheet.create({
    page: {
      color: "black",
    },
    heading: {
      textAlign: "center",
      fontSize: 30,
      borderBottom: "1px solid black",
      marginBottom: 8,
    },
    youritem: {
      textAlign: "center",
      fontSize: 20,
    },
    recieptitem: {
      textAlign: "center",
      fontWeight: 600,
      padding: 1,
      fontSize: 12,
      margin: 8,
    },
    total: {
      textAlign: "center",
      borderTop: "1px solid black",
      marginTop: 8,
      fontSize: 15,
    },
  });
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.heading}>SpendAmbani'sFortune</Text>
        <Text style={styles.youritem}>Your Items</Text>
        {cartItems?.map((item) => {
          return (
            <Text style={styles.recieptitem} key={item.id}>
              {item.name} x {item.quantity}______________ Rs.
              {item.price.toLocaleString()}
            </Text>
          );
        })}
        <Text style={styles.total}>
          Total Spending :- {total.toLocaleString()}
        </Text>
      </Page>
    </Document>
  );
}

export default PdfComp;
