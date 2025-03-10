import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import FormRow from "../../components/FormRow";
import { Form } from "../../components/Forms";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { useCreateRide } from "./useCreateRide";
import { useEditRide } from "./useEditRide";

const ButtonRow = ({ children }) => {
  return (
    <div className="flex justify-end gap-3 border-none p-3">{children}</div>
  );
};

function CreateRideForm({ rideToEdit = {} }) {
  const { id: editId, ...editValues } = rideToEdit;
  const isEditSession = Boolean(editId);
  const { isCreating, createRide } = useCreateRide();
  const { isEditing, editRide } = useEditRide();

  const isWorking = isCreating || isEditing;
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editRide(
        { newRideData: { ...data, image }, id: editId },
        { onSuccess: () => reset() },
      );
    else createRide({ ...data, image: image }, { onSuccess: () => reset() });
  }

  function onError(error) {
    console.log(error.message);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Jazda" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <FormRow label="Cena" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <FormRow label="Zľava" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "Toto pole je povinné",
            validate: (value) =>
              value < getValues().regularPrice ||
              "Zľava nemôže byť viac ako 100% z ceny",
          })}
        />
      </FormRow>

      <FormRow label="Popis" error={errors?.description?.message}>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <FormRow label="Obrázok">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Toto pole je povinné",
          })}
        />
      </FormRow>

      <ButtonRow>
        <Button variant="secondary" type="reset">
          Reset
        </Button>
        <Button disabled={isWorking} type="submit">
          {isEditSession ? "Uprav jazdu" : "Pridaj jazdu"}
        </Button>
      </ButtonRow>
    </Form>
  );
}

export default CreateRideForm;
