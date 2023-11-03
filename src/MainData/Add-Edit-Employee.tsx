import { useForm } from "@mantine/form";
import { TextInput, Button, Box } from "@mantine/core";

interface valueType {
  email: string;
  pass: string;
}
export default function AddEditEmployee() {
  //   const [submittedValues, setSubmittedValues] = useState("");
  const form = useForm({
    initialValues: {
      name: "Doe John",
      email: "raj@gmail.com",
      contact: "9856784578",
    },

  });
  const onsubmit = (value: valueType) => {
    console.log("data", value);
    // setSubmittedValues(value);
  };

  return (
    <Box maw={340} mx="auto" style={{ marginTop: "10%" }}>
      <form onSubmit={form.onSubmit(() => onsubmit)}>
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
          placeholder="enter contact number"
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
