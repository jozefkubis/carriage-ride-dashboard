import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import FormRow from "../../components/FormRow";
import { ModalForm } from "../../components/Forms";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { useCreateRide } from "./useCreateRide";
import { useEditRide } from "./useEditRide";

const ButtonRow = ({ children }) => {
  return (
    <div className="flex justify-end gap-3 border-none p-3">{children}</div>
  );
};

function CreateRideForm({ rideToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = rideToEdit;
  const isEditSession = Boolean(editId);
  const { isCreating, createRide } = useCreateRide();
  const { isEditing, editRide } = useEditRide();
  const isWorking = isCreating || isEditing;

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  // Spoločná funkcia pre úspešné odoslanie formulára
  const handleSuccess = () => {
    reset();
    onClose?.();
  };

  function onSubmit(data) {
    // Spracovanie obrázka: ak ide o reťazec, ponecháme ho, inak vezmeme prvý súbor
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) {
      editRide(
        { newRideData: { ...data, image }, id: editId },
        { onSuccess: handleSuccess },
      );
    } else {
      createRide({ ...data, image }, { onSuccess: handleSuccess });
    }
  }

  function onError(error) {
    console.log(error.message);
  }

  return (
    <ModalForm onSubmit={handleSubmit(onSubmit, onError)}>
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
              Number(value) < Number(getValues().regularPrice) ||
              "Zľava nemôže byť viac ako cena",
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
        {/* Zvážte premenovanie tlačidla na Cancel, ak zamýšľate zatvoriť modal */}
        <Button variant="secondary" type="reset" onClick={() => onClose?.()}>
          Zrušiť
        </Button>
        <Button disabled={isWorking} type="submit">
          {isEditSession ? "Uprav jazdu" : "Pridaj jazdu"}
        </Button>
      </ButtonRow>
    </ModalForm>
  );
}

export default CreateRideForm;
