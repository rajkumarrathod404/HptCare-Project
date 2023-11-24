import { Button, Paper, Table, TableTbody, TableThead } from "@mantine/core";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";
export type empType = {
  id: number;
  name: string;
  email: string;
  contact: string;
};
export type editEmpType = {
  data: { id: number; name: string; email: string; contact: string };
  source: string;
};

// const handleAdd = () => {};

export const editEmpContext = createContext<empType | undefined>(undefined);
const MainData = ({ emplist }: { emplist: empType[] }) => {
  const [editData, setEditData] = useState<empType>();
  const handleDeleteEdit = (id: number, source: string) => {
    if (source === "REMOVE") {
      window.confirm("do you want to delete ") &&
        fetch(`http://localhost:3000/emps/${id}`, {
          method: "DELETE",
        })
          .then(() => console.log("removed"))
          .catch((err) => console.log(err.message));
    } else {
      fetch(`http://localhost:3000/emps/${id}`)
        .then((res) => res.json())
        .then((resp) => setEditData(resp))
        .catch((err) => console.log(err.message));
      fetch(`http://localhost:3000/emps/${editData?.id}`, {
        method: "PUT",
      })
        .then(() => console.log("updated successfully"))
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <Paper shadow="md" p="md" style={{ width: "1300px", position: "fixed" }}>
      <Link to={"/emp/create"}>
        <Button style={{ backgroundColor: "green", marginBottom: "10px" }}>
          Add Employee (+)
        </Button>
      </Link>
      {emplist.length > 0 ? (
        <Table>
          <TableThead
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "5px",
            }}
          >
            <tr>
              <td style={{ fontWeight: "bold" }}>Id</td>
              <td style={{ fontWeight: "bold" }}>Name</td>
              <td style={{ fontWeight: "bold" }}>email</td>
              <td style={{ fontWeight: "bold" }}>Contact</td>
              <td style={{ fontWeight: "bold" }}>Action</td>
            </tr>
          </TableThead>
          {emplist?.map((emp: empType) => {
            return (
              <TableTbody key={emp.id}>
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.contact}</td>
                  <td>
                    <Link to={"/emp/create"}>
                      <Button
                        style={{ backgroundColor: "#5DADE2" }}
                        onClick={() => {
                          handleDeleteEdit(emp.id, "EDIT");
                        }}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        handleDeleteEdit(emp.id, "REMOVE");
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </TableTbody>
            );
          })}
        </Table>
      ) : (
        <Table>
          <TableThead>
            <tr>
              <th>No Data Found</th>
            </tr>
          </TableThead>
        </Table>
      )}
    </Paper>
  );
};

export default MainData;
