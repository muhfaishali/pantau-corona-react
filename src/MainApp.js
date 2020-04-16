import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Datatable from '../src/component/datatable/Datatable';
import SelectCountry from '../src/component/select/Select';

const styles = theme => ({
    paper: {
        width: "75%",
        height: "150px",
        backgroundColor: "#4caf50",
        margin: "auto",
    },
    paper2: {
        width: "75%",
        marginTop: "50px",
        marginBottom: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto",
        backgroundColor: "#4caf50",
    },
    box1: {
        width: "80%",
        height: "200px",
        backgroundColor: "#4caf50",
        margin: "auto",
        marginTop: "40px"
    },
    textStyle: {
        color: "#fff",
        paddingTop: "40px",
        textAlign: "center",
        fontSize: "40px"
    }
});

const COLUMNS = [
    {
        name: "No",
        selector: "no_urt",
    },
    {
        name: "Negara",
        selector: "name",
    },
    // {
    //     name: "Positif",
    //     selector: "confirmed",
    // },
    // {
    //     name: "Sembuh",
    //     selector: "recovered",
    // },
    // {
    //     name: "Meninggal",
    //     selector: "deaths",
    // },
]

class MainApp extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <h1 className={classes.textStyle}>LAPORAN COVID-19</h1>
                </Paper>
                
                <div style={{marginTop: "100px"}}>
                    <SelectCountry />
                    <Grid container>
                        <Grid item xs={6} sm={4}>
                            <Paper className={classes.box1}>1</Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Paper className={classes.box1}>1</Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Paper className={classes.box1}>1</Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mtp = ({}) => {
    return {}
}

export default withStyles(styles)(connect(mtp, {}) (MainApp));