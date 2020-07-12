import React from 'react';
import log from 'loglevel';
import {Button, Divider, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import {PageNotFound} from "../ui/error/pageNotFound";
import Cookies from "js-cookie";
import {CART_TOTAL} from "../../actions/types";

const paymentStyles = {
    header: {
        fontColor: "#535766",
        fontWeight: "bolder",
        fontSize: "1.2rem",
        paddingTop: 20,
    },
    fontColor: "#282c3f",
    fontWeight: 400,
    fontSize: "1.1rem",
}

function PriceDetails(props) {
    let cartTotal = useSelector(state => state.cartTotalReducer);

    if (!cartTotal) {
        cartTotal = Cookies.get(CART_TOTAL)
        if (cartTotal) {
            cartTotal = JSON.parse(cartTotal)
        } else {
            return <PageNotFound/>
        }
    }

    const renderGridData = (label, value, styles) => {
        return (
            <Grid container sm={10} style={styles}>
                <Grid container sm={10}>
                    {label}
                </Grid>
                <Grid container sm={2} justify="flex-end">
                    {value}
                </Grid>
            </Grid>
        )
    }

    log.info("[Checkout] Rendering PriceDetails Component.")

    return (
        <Grid container justify="center">
            <Grid item sm={10} style={paymentStyles.header}>
                PRICE DETAILS
            </Grid>

            {renderGridData("Bag Total", `$${cartTotal}`, {...paymentStyles, paddingTop: 10})}
            {renderGridData("Shipping", "FREE", {...paymentStyles, paddingTop: 10})}

            <Grid container sm={10} style={{paddingTop: 17}}>
                <Divider style={{width: "100%", height: 1}}/>
            </Grid>

            {renderGridData("Order Total", `$${cartTotal}`,
                {...paymentStyles.header, paddingTop: 17})}

            <Grid container sm={9} justify="center"
                  style={{...paymentStyles.header, padding: "30px 0 30px 0"}}
            >
                <Button variant="contained" size="medium"
                        onClick={props.onBtnClickHandler}
                        style={{
                            width: '100%', height: 40, color: 'white',
                            fontWeight: "bold", backgroundColor: "#AB0000"
                        }}>
                    {props.buttonName}
                </Button>
            </Grid>
        </Grid>
    )
}

export default PriceDetails;