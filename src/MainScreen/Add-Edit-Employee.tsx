import { useForm } from "@mantine/form";
import { TextInput, Button, Box } from "@mantine/core";

interface formInputValueType {
  name: string;
  email: string;
  contact: string;
}
interface propType {
  sourceName: string;
}

export default function AddEditEmployee(
  // data: formInputValueType,
  // sourceName: propType
) {
  //   const [submittedValues, setSubmittedValues] = useState("");
  const form = useForm(
    // sourceName == "EDIT"
    //   ? {
    //       initialValues: {
    //         name: data.name,
    //         email: data.email,
    //         contact: data.contact,
    //       },
    //     }
    //   : 
      {
          initialValues: {
            name: "",
            email: "",
            contact: "",
          },
        }
  );
  const onsubmit = (value: formInputValueType) => {
    // value.preventDefault(),
    console.log("data", value);
    const { name, email, contact } = { ...value };
    const empdata = { name, email, contact };
    fetch("http://localhost:8000/emp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        console.log("", empdata);
        return res.json();
        console.log("res", res);
      })
      .then((resp) => {
        console.log("res", resp);
      })
      .catch((err) => console.log(err.message));
    // setSubmittedValues(value);
  };

  return (
    <Box maw={340} mx="22rem" style={{ marginTop: "5%" }}>
      <form onSubmit={form.onSubmit((value) => onsubmit(value))}>
        <TextInput
          type="text"
          label="Name"
          placeholder="enter name"
          mt="md"
          {...form.getInputProps("name")}
        />
        <TextInput
          type="email"
          label="Email "
          placeholder="enter email"
          mt="md"
          {...form.getInputProps("email")}
        />
        <TextInput
          type="text"
          label="contact"
          placeholder="enter contact contactber"
          mt="md"
          {...form.getInputProps("contact")}
        />
        <Button type="submit" mt="md">
          Add Employee
        </Button>
      </form>
    </Box>
  );
}
// }
