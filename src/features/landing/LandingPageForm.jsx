import React, { useState, useEffect } from "react";
import { RowVertical } from "../../components/Rows";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import { SettingsForm } from "../../components/Forms";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import { useLanding } from "./useLanding";
import Textarea from "../../components/Textarea";

function LandingPageForm() {
  const { isLoading, landingPageData } = useLanding();

  // Lokálne stavy pre formulár
  const [updateHeader, setUpdateHeader] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [updateImage, setUpdateImage] = useState(null);

  // Aktualizácia stavu, keď sa načítajú dáta
  useEffect(() => {
    if (landingPageData) {
      setUpdateHeader(landingPageData.header || "");
      setUpdateText(landingPageData.text || "");
      setUpdateImage(landingPageData.image || null);
    }
  }, [landingPageData]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ updateHeader, updateText, updateImage });
  }

  return (
    <SettingsForm onSubmit={handleSubmit}>
      <FormRow label="Header">
        <Input
          type="text"
          value={updateHeader}
          onChange={(e) => setUpdateHeader(e.target.value)}
          id="header"
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Text">
        <Textarea
          type="text"
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          id="text"
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Obrázok">
        <FileInput
          id="image"
          accept="image/*"
          onChange={(e) => setUpdateImage(e.target.files[0])}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Button type="reset" variant="secondary" disabled={isLoading}>
          Reset
        </Button>
        <Button disabled={isLoading}>Aktualizovať údaje</Button>
      </FormRow>
    </SettingsForm>
  );
}

export default LandingPageForm;
