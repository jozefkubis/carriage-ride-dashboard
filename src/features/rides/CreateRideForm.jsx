import Input from "../../components/Input";
import { Form } from "../../components/Forms";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import Textarea from "../../components/Textarea";
import { useForm } from "react-hook-form";

const FormRow = ({ children }) => {
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b py-3 last:border-b-0">
      {children}
    </div>
  );
};

const ButtonRow = ({ children }) => {
  return (
    <div className="flex justify-end gap-3 border-none p-3">{children}</div>
  );
};

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="font-medium">
      {children}
    </label>
  );
};

const Error = ({ children }) => {
  return <span className="text-sm text-red-700">{children}</span>;
};

function CreateRideForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Jazda</Label>
        <Input type="text" id="name" {...register("name")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Cena</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Zľava</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Popis</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Obrázok</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <ButtonRow>
        <Button variant="secondary" type="reset">
          Reset
        </Button>
        <Button type="submit">Pridaj jazdu</Button>
      </ButtonRow>
    </Form>
  );
}

export default CreateRideForm;
