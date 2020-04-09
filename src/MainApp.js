import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Datatable from '../src/component/datatable/Datatable';

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
                <Paper className={classes.paper2}>
                    <Datatable 
                        title="List Negara"
                        uriPage="countries/"
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