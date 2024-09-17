import React from "react";

const TableContainer = ({ Children, props }) => {
    return <table{ ...props}>{Children}</table>;
};

const thead = ({ Children, props }) => {
    return <thead{ ...props}>{Children}</thead>;
};
const tbody = ({ Children, props }) => {
    return <tbody{ ...props}>{Children}</tbody>;
};
const tfoot = ({ Children, props }) => {
    return <tfoot{ ...props}>{Children}</tfoot>;
};

const Row = ({ Children, props}) => {
    return <tr{ ...props}>{Children}</tr>;
};

const Column = ({ Children, props}) => {
    return <td{ ...props}>{Children}</td>;
};

const Header = ({ Children }) => {
    return <th{ ...props}>{Children}</th>;
};

const ColumnHeader = ({ Children }) => {
    return <ts{ ...props}>{Children}</ts>;
};

const Table = {
    TableContainer,
    thead,
    tbody,
    tfoot,
    Row,
    Column,
    Header,
    ColumnHeader,
}

export default Table;

/*
    <table>
        <thead>
            <tr>
/*/