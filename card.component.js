import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Header = (props) => (
    <View {...props}>
        <Text category='h4'>Kiselev Nikolay</Text>
        <Text category='s1'>Machine and me</Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Button
            onPress={()=>{alert("hey")}}
            style={styles.footerControl}
            size='small'
            status='basic'>
            CANCEL
      </Button>
        <Button
            onPress={()=>{alert("hey")}}
            style={styles.footerControl}
            size='small'>
            ACCEPT
      </Button>
    </View>
);


export const CardAccessoriesShowcase = () => (
    <React.Fragment>
        <Card style={styles.card} header={Header} footer={Footer}>
            <Text>
                Founder of this product
            </Text>
        </Card>

    </React.Fragment>
);

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        alignSelf: 'stretch',
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});