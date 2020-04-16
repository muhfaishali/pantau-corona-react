import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/styles';
import Select from 'react-select';
import {countries} from './countries';

const Styles = theme=>({
    selectCountry: {
        margin: "auto",
        width: "30%",
    },
    textStyle: {
        textAlign: "center"
    }
})

class SelectCountry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isSearch:false,
            selectCountry:''
        }
    }

    handleChange = selectCountry => {
        this.setState(
            {selectCountry},
            () => console.log(`check country : `, this.state.selectCountry)
        );
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
                placeholder="Negara"
            />
        )
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <p className={classes.textStyle}>Pilih Negara : </p>
                {this.renderSelect()}
            </div>
        )
    }
}

export default connect(({pcs}) => {
    const {miniloader} = pcs;
    return {miniloader}
},{})(withStyles(Styles)(SelectCountry))