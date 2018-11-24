import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reducersActions } from '../actions/reducers.actions';
import { URL_SOCIAL } from '../util/constants';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const axios = require("axios");

class CompTableSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableBody: [],
        }
    }

    componentDidMount() {
        axios.get(URL_SOCIAL).then((response) => {
            this.setState({
                tableBody: response.data
            })
            this.props.dispatch(reducersActions.updateSocialReducer(response.data));
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
            <Paper style={style.paper}>
                <div style={style.headerPaper}>
                    <h5>Ranking redes sociais</h5>
                </div>
                <div style={style.contentTable}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Posição</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Quantidade</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.tableBody.map((row, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
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
    const { social } = state.social;
    return {social};
}

export default connect(mapStateToProps)(CompTableSocial);