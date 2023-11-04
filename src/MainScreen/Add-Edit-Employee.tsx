import { useForm } from "@mantine/form";
import { TextInput, Button, Box } from "@mantine/core";

interface formInputValueType {
  name: string;
  email: string;
  contact: string;
}
// interface propType {
//   SOURCE: string;
// }

export default function AddEditEmployee() {
  //   const [submittedValues, setSubmittedValues] = useState("");
  const form = useForm({
    initialValues: {
      name: "Doe John",
      email: "raj@gmail.com",
      contact: "9865784578",
    },
    // ):
    // initialValues: {
    //   name: "",
    //   email: "",
    //   contact: "",
    // },
  });
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
    <Box maw={340} mx="auto" style={{ marginTop: "10%" }}>
      <form onSubmit={form.onSubmit((value) => onsubmit(value))}>
        {/* <TextInput
            type="contactber"
            label="id"
            placeholder="enter id"
            mt="md"
            {...form.getInputProps("id")}
          /> */}
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

      {/* {submittedValues && <Code block>{submittedValues}</Code>} */}
    </Box>
  );
}
// }
