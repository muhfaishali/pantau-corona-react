import React from "react";
import DataTable from 'react-data-table-component';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {InputBase, IconButton, TextField} from '@material-ui/core';
import { pageChange, initTable} from '../../redux/actions';
import {Search, Refresh, Style, Close} from '@material-ui/icons'

const Styles= theme=>({
    header:{
        fontSize:14,
    },
    margin: {
        margin: theme.spacing(1),
    },
    input:{
        marginTop:"12px"
    },
    searchField:{
        marginRight:"50px"
    }
});

const DtblTheme={
    rows: {
        // default || spaced
        fontSize: '12px',
        padding:'3px'
    },
    
}

class ServerSideDataTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchValue:'',
            pageNum:1,
            isSearch:false,
        }
    }

    componentDidMount(){
        this.initialize();
    }

    componentDidUpdate(prevProps) {
        if ((this.props.uriPage !== prevProps.uriPage) || (this.props.reload !== prevProps.reload)) {
            this.initialize();
        }
    }

    initialize(){
        const {convertData, uriPage, basePage}=this.props;
        const base = basePage || 'api/';
        const uri = `${base}${uriPage}`;
        this.props.initTable(convertData, uri);
        this.handlePageChange();
    }

    handlePageChange=()=>{
        const {pageChange, uriPage, basePage}=this.props;
        // const {searchValue}=this.state;
        const base=basePage || 'api/';
        const uri = `${base}${uriPage}`;
        pageChange(uri);
    }

    handlePerRowsChange=()=>{
        const {pageChange, uriPage, basePage}=this.props;
        const base=basePage || 'api/';
        const uri = `${base}${uriPage}`;
        pageChange(uri);
    }

    doSearch=()=>{
        if(this.state.isSearch==false){
            this.setState({isSearch:true})
        } else {
            this.initialize();
        }
    }

    closeSearch(){
        this.setState({isSearch:false, searchValue:''})
        setTimeout(()=>{
            this.initialize();
        },300)
    }

    renderHeader(){
        const {classes}=this.props;
        return (
            <div>
                <IconButton size="medium" className={classes.margin} aria-label="Refresh" onClick={()=>this.initialize()} >
                    <Refresh/>
                </IconButton>
            </div>
        )
    }

    render(){
        const {title, columns, data, miniLoader, onRowClicked, uriPage, basePage, expandComponent, expandRows}=this.props;
        const base=basePage || 'api/';
        const uri = `${base}${uriPage}`;
        return <DataTable
                    noHeader={true}
                    title={title}
                    columns={columns}
                    data={data[uri] || []}
                    progressPending={miniLoader}
                    onChangeRowsPerPage={ this.handlePerRowsChange}
                    onChangePage={ this.handlePageChange}
                    highlightOnHover={true}
                    customTheme={DtblTheme}
                    expandableRows={expandRows}
                    onRowClicked={onRowClicked}
                    expandableRowsComponent={expandComponent}
                    expandOnRowClicked
                    subHeader
                    subHeaderComponent={
                        <div>
                            {this.renderHeader()}
                        </div>
                    }
                />
    }
}

export default connect(({tbl, pcs})=>{
    const {data}=tbl;
    const {miniLoader}=pcs;
    return {miniLoader, data}
}, {pageChange, initTable})(withStyles(Styles)(ServerSideDataTable));