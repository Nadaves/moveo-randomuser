import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/userRedux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { visuallyHidden } from "@mui/utils";
import Pagination from "@mui/material/Pagination";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";
import "./Table.css";

const Container = styled.div`
  width: 95%;
  @media screen and (min-width: 600px) {
    width: 80%;
  }
`;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "asc"
    ? (a, b) => -descendingComparator(a, b, orderBy)
    : (a, b) => descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "picture",
    disablePadding: false,
    label: "Picture",
  },
  {
    id: "name",
    disablePadding: false,
    label: "Name",
  },
  {
    id: "email",
    disablePadding: false,
    label: "Email",
  },
  {
    id: "gender",
    disablePadding: false,
    label: "Gender",
  },
  {
    id: "age",
    disablePadding: false,
    label: "Age",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            width={"20"}
            scope={"col"}
            align={"left"}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=10&seed=moveo`)
      .then((res) => {
        setRows(
          res.data.results.map((user) => ({
            picture: user.picture,
            name: user.name.first,
            email: user.email,
            gender: user.gender,
            age: user.dob.age,
            username: user.login.username,
            location: user.location,
          }))
        );
      });
  }, [page]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleRowClick = (event, row) => {
    navigate(`/user:${row.username}`);
    dispatch(setUser(row));
  };

  function capitalizeTxt(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1); 
  }
  
  return (
    <Container>
      <Box>
        <Paper>
          <TableContainer>
            <Table
              sx={{
                minWidth: 250,
              }}
              aria-labelledby="tableTitle"
              size={"large"}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(0, 9)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        tabIndex={1}
                        key={row.username}
                        onClick={(event) => handleRowClick(event, row)}
                      >
                        <TableCell align="left">
                          <img
                            src={row.picture.medium}
                            style={{ borderRadius: "50%" }}
                            alt="user"
                          />
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">
                          <a href={`mailto:${row.email}`}>
                            <EmailIcon />
                          </a>
                        </TableCell>
                        <TableCell align="left">
                          {capitalizeTxt(row.gender)}
                        </TableCell>
                        <TableCell align="left">{row.age}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            page={page}
            size={"small"}
            count={10}
            onChange={handleChangePage}
            color="primary"
            sx={{
              padding: "1em",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Paper>
      </Box>
    </Container>
  );
}
