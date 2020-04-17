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
        marginTop: "100px",
        marginBottom: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto"
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
    },
    copyright: {
        color: "#fff",
        textAlign: "center"
    }
});

const COLUMNS = [
    {
        name: "No",
        width: "10%",
        selector: "no_urt",
    },
    {
        name: "Negara",
        selector: "countryRegion",
    },
    {
        name: "Positif",
        selector: "confirmed",
    },
    {
        name: "Sembuh",
        selector: "recovered",
    },
    {
        name: "Meninggal",
        selector: "deaths",
    },
]

class MainApp extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <h1 className={classes.textStyle}>PANTAU COVID-19</h1>
                    <p className={classes.copyright}>© 2020. Dikembangkan oleh <a href="https://github.com/muhfaishali" style={{ color: "#fff" }} target="_blank">Faishal</a> & Data API dikembangkan oleh <a href="https://github.com/mathdroid/covid-19-api" style={{color: "#fff"}} target="_blank">mathdroid</a></p>
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

                <Paper className={classes.paper2}>
                    <Datatable 
                        title="List Negara"
                        uriPage="confirmed/"
                        columns={COLUMNS}
                        convertData={(row)=>{
                            return row;
                        }}  
                    />
                </Paper>
            </div>
        )
    }
}

const mtp = ({}) => {
    return {}
}

export default withStyles(styles)(connect(mtp, {}) (MainApp));