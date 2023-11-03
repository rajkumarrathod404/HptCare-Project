import { Button, Paper, Table, TableTbody, TableThead } from "@mantine/core";
import { Link } from "react-router-dom";
interface empType {
  id: number;
  name: string;
  email: string;
  num: number;
}
const handleDeleteEdit = (id: number, source: string) => {
  // source==="EDIT"?
};

const MainData = ({ emplist }: { emplist: empType[] }) => {
  return (
    <>
      <Paper shadow="md" p="md" style={{ width: "1300px", position: "fixed" }}>
        <Link to={"/Add/emp"}>
          <Button style={{ backgroundColor: "green", marginBottom: "10px" }}>
            Add Employee (+)
          </Button>
        </Link>
        <Table>
          <TableThead
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "5px",
            }}>
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
              <TableTbody>
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.num}</td>
                  <td>
                    <Button
                      // style={{ backgroundColor: "green" }}
                      onClick={() => {
                        handleDeleteEdit(emp.id, "EDIT");
                      }}>
                      Edit
                    </Button>
                    <Button
                      style={{ backgroundColor: "red" }}
                      onClick={() => {
                        handleDeleteEdit(emp.id, "REMOVE");
                      }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </TableTbody>
            );
          })}
        </Table>
      </Paper>
    </>
  );
};

export default MainData;
