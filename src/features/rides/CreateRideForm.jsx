import Input from "../../components/Input";
import { Form } from "../../components/Forms";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import Textarea from "../../components/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createRide } from "../../services/apiRides";
import FormRow from "../../components/FormRow";

const ButtonRow = ({ children }) => {
  return (
    <div className="flex justify-end gap-3 border-none p-3">{children}</div>
  );
};

function CreateRideForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createRide,
    onSuccess: () => {
      toast.success("Jazda bola úspešne pridaná");
      queryClient.invalidateQueries({ queryKey: ["ride"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
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
          disabled={isCreating}
          {...register("name", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <FormRow label="Cena" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <FormRow label="Zľava" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isCreating}
          {...register("discount", {
            required: "Toto pole je povinné",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Zľava nemôže byť viac ako 100% z ceny",
          })}
        />
      </FormRow>

      <FormRow label="Popis" error={errors?.description?.message}>
        <Textarea
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <FormRow label="Obrázok">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <ButtonRow>
        <Button variant="secondary" type="reset">
          Reset
        </Button>
        <Button disabled={isCreating} type="submit">
          Pridaj jazdu
        </Button>
      </ButtonRow>
    </Form>
  );
}

export default CreateRideForm;
