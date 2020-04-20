import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Datatable from '../src/component/datatable/Datatable';
import SelectCountry from '../src/component/select/Select';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/HashLoader'


const styles = theme => ({
    paper: {
        width: "65%",
        height: "150px",
        backgroundColor: "#4caf50",
        margin: "auto",
    },
    paper2: {
        width: "75%",
        marginTop: "100px",
        marginBottom: "70px",
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto"
    },
    textStyle: {
        color: "#fff",
        textAlign: "center",
        fontSize: "30px",
        paddingTop: "50px"
    },
    textStyle2: {
        color: "#fff",
        textAlign: "center"
    },
    copyright: {
        color: "#000",
        textAlign: "center"
    }
});

const COLUMNS = [
    {
        name: "No",
        width: "15%",
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
        const {classes, miniLoader} = this.props;
        return (
            <div>
                <LoadingOverlay
                    active={miniLoader}
                    spinner={<BounceLoader color="#021f4e"/>}
                    text='Loading....'
                    styles={{
                        overlay:(base)=>({
                            ...base,
                            zIndex:9999,
                            background:'rgba(2,31, 78,0.5)',
                            position:'fixed'
                        }),
                        wrapper:(base)=>({
                            ...base                        
                        }),
                        content:(base)=>({
                            ...base,
                            fontSize:35,
                            fontWeight:'bold'
                        })
                    }}
                >
                    <Paper className={classes.paper}>
                        <h1 className={classes.textStyle}>PANTAU COVID-19</h1>
                    </Paper>
                    
                    <div style={{marginTop: "100px"}}>
                        <SelectCountry />
                    </div>

                    <Paper className={classes.paper2}>
                        <Datatable 
                            title="List Negara"
                            uriPage="confirmed/"
                            dataPerpage={20}
                            columns={COLUMNS}
                            convertData={(row)=>{
                                return row;
                            }}  
                        />
                    </Paper>

                    <div>
                        <p className={classes.copyright}>© 2020. Dikembangkan oleh <a href="https://github.com/muhfaishali" style={{ color: "#000" }} target="_blank">Faishal</a> & Data API dikembangkan oleh <a href="https://github.com/mathdroid/covid-19-api" style={{color: "#000"}} target="_blank">mathdroid</a></p>
                    </div>
                </LoadingOverlay>
            </div>
        )
    }
}

const mtp = ({pcs}) => {
    const {miniLoader} = pcs
    return {miniLoader}
}

export default withStyles(styles)(connect(mtp, {}) (MainApp));