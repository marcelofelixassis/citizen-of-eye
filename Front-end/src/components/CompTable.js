import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reducersActions } from '../actions/reducers.actions';
import { URL_DEPUTIES } from '../util/constants';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const moment = require("moment");
const axios = require("axios");

class CompTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: '',
            tableBody: Array(),
        }    
    }

    componentDidMount(){
        this.setState({ month: moment().format('MM') });
        this.changeTableBody(moment().format('MM'));
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            tableBody: nextProps.deputies,
        })
    }
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        this.changeTableBody(event.target.value);
    };

    changeTableBody(month) {
        axios.get(URL_DEPUTIES+''+month).then((response) => {
            this.props.dispatch(reducersActions.updateDeputiesReducer(response.data));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    render() {

        const style = {
            paper: {
                opacity:"0.95"
            },
            headerPaper: {
                textAlign: "center",
                paddingTop: "10px"
            },
            contentTable: {
                width: 'auto',
                overflowX: 'scroll'
            }
        }

        return (    
            <Paper style={style.papel}>
                <div style={style.headerPaper}>
                    <h5>Top 5 deputados/verbas indenizatórias 2017</h5>
                    <FormControl>
                        <NativeSelect value={this.state.month} name="month" onChange={this.handleChange('month')}>
                            <option value="" disabled>Mês</option>
                            <option value={1}>Janeiro</option>
                            <option value={2}>Fevereiro</option>
                            <option value={3}>Março</option>
                            <option value={4}>Abril</option>
                            <option value={5}>Maio</option>
                            <option value={6}>Junho</option>
                            <option value={7}>Julho</option>
                            <option value={8}>Agosto</option>
                            <option value={9}>Setembro</option>
                            <option value={10}>Outubro</option>
                            <option value={11}>Novembro</option>
                            <option value={12}>Dezembro</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div style={style.contentTable}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Posição</TableCell>
                            <TableCell>Nome Completo</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Partido</TableCell>
                            <TableCell>Ativ.Profissional</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.tableBody.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                    <TableCell>{row.pp}</TableCell>
                                    <TableCell>{row.ap}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    const { deputies } = state.deputies;
    return {deputies}
};

export default connect(mapStateToProps)(CompTable);