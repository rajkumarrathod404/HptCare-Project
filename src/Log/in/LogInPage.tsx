import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Code } from "@mantine/core";
import { useNavigate } from "react-router";

interface valueType {
  email: string;
  pass: string;
}
export default function LogInPage() {
  const navigate = useNavigate();
  const [submittedValues, setSubmittedValues] = useState("");
  const form = useForm({
    initialValues: {
      email: "Doe@gmail",
      pass: "Rajkumar*jd45An",
    },

    // transformValues: (values) => ({
    //   fullName: `${values.firstName} ${values.lastName}`,
    //   age: Number(values.age) || 0,
    // }),
  });
  const onsubmit = (value: valueType) => {
    navigate("/");
    console.log("data", value);
  };

  return (
    <Box maw={340} mx="auto" style={{ marginTop: "10%" }}>
      <form onSubmit={form.onSubmit(onsubmit)}>
        <TextInput
          type="email"
          label="enter E-mail"
          mt="md"
          {...form.getInputProps("email")}
        />
        <TextInput
          type="password"
          label="Enter Password"
          mt="md"
          {...form.getInputProps("pass")}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {/* {submittedValues && <Code block>{submittedValues}</Code>} */}
    </Box>
  );
}
