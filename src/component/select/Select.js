import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import Select from 'react-select';
import {countries} from './countries';
import {getPercountry} from '../../redux/actions';
import { FaGrinBeam, FaFrownOpen, FaSadCry } from 'react-icons/fa';

const Styles = theme=>({
    selectCountry: {
        margin: "auto",
        width: "30%",
    },
    textStyle: {
        textAlign: "center"
    },
    box1: {
        width: "80%",
        height: "200px",
        backgroundColor: "#4caf50",
        margin: "auto",
        marginTop: "40px"
    },
    textStyle2: {
        color: "#fff",
        textAlign: "center"
    },
})

class SelectCountry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isSearch:false,
            selectCountry:'Indonesia'
        }
    }

    componentDidMount() {
        const {getPercountry} = this.props;
        const {selectCountry} = this.state;
        getPercountry(selectCountry);
    }

    handleChange = selectCountry => {
        const {getPercountry} = this.props;
        this.setState(
            {selectCountry},
            () => console.log(`check country : `, this.state.selectCountry.value)
        );
        getPercountry(selectCountry.value);
    };

    renderSelect() {
        const {selectCountry} = this.state;
        const {classes} = this.props;
        return (
            <Select 
                className={classes.selectCountry}
                value={selectCountry}
                onChange={this.handleChange}
                options={countries}
                placeholder="Indonesia"
            />
        )
    }

    boxRender() {
        const {classes, perCountry} = this.props;
        const recovered = perCountry.confirmed && perCountry.recovered.value;
        const confirmed = perCountry.confirmed && perCountry.confirmed.value;
        const deaths = perCountry.confirmed && perCountry.deaths.value;
        
        return (
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.box1}>
                        <h2 className={classes.textStyle2}>SEMBUH</h2>
                        <Grid container>
                            <Grid item xs={6} sm={5}>
                                <FaGrinBeam size={120} style={{ marginLeft: "15px", color: "#fff" }} />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <h1 style={{ color: "#fff", fontSize: "43px", marginTop: "15px" }}>{recovered}</h1>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.box1}>
                        <h2 className={classes.textStyle2}>POSITIF</h2>
                        <Grid container>
                            <Grid item xs={6} sm={5}>
                                <FaFrownOpen size={120} style={{ marginLeft: "15px", color: "#fff" }} />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <h1 style={{ color: "#fff", fontSize: "43px", marginTop: "15px" }}>{confirmed}</h1>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.box1}>
                        <h2 className={classes.textStyle2}>MENINGGAL</h2>
                        <Grid container>
                            <Grid item xs={6} sm={5}>
                                <FaSadCry size={120} style={{ marginLeft: "15px", color: "#fff" }} />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <h1 style={{ color: "#fff", fontSize: "43px", marginTop: "15px" }}>{deaths}</h1>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <p className={classes.textStyle}>Pilih Negara : </p>
                {this.renderSelect()}
                {this.boxRender()}
            </div>
        )
    }
}

export default connect(({pcs, details}) => {
    const {miniloader} = pcs;
    const {perCountry} = details;
    return {miniloader, perCountry}
},{getPercountry})(withStyles(Styles)(SelectCountry))