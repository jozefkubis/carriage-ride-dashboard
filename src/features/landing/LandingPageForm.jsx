import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import FormRow from "../../components/FormRow";
import { SettingsForm } from "../../components/Forms";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { useLanding } from "./useLanding";
import { useEditLanding } from "./useEditLanding";

function LandingPageForm() {
  const { isLoading, landingPageData } = useLanding();
  const { isEditing, editLanding } = useEditLanding();

  const [updateHeader, setUpdateHeader] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [updateImage, setUpdateImage] = useState(null);

  useEffect(() => {
    if (landingPageData) {
      setUpdateHeader(landingPageData.header || "");
      setUpdateText(landingPageData.text || "");
      setUpdateImage(landingPageData.image || null);
    }
  }, [landingPageData]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!landingPageData) return;
      editLanding({
        id: landingPageData.id,
        updates: {
          header: updateHeader,
          text: updateText,
          image: updateImage,
        },
      });
    },
    [editLanding, landingPageData, updateHeader, updateText, updateImage],
  );

  // Handler, ktorý po resetovaní obnoví hodnoty z landingPageData
  const handleReset = useCallback(() => {
    if (landingPageData) {
      setUpdateHeader(landingPageData.header || "");
      setUpdateText(landingPageData.text || "");
      setUpdateImage(landingPageData.image || null);
    }
  }, [landingPageData]);

  return (
    <SettingsForm onSubmit={handleSubmit} onReset={handleReset}>
      <FormRow label="Header">
        <Input
          type="text"
          value={updateHeader}
          onChange={(e) => setUpdateHeader(e.target.value)}
          id="header"
          disabled={isLoading || isEditing}
        />
      </FormRow>

      <FormRow label="Text">
        <Textarea
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          id="text"
          disabled={isLoading || isEditing}
        />
      </FormRow>

      <FormRow label="Obrázok">
        <FileInput
          id="image"
          accept="image/*"
          onChange={(e) => setUpdateImage(e.target.files[0])}
          disabled={isLoading || isEditing}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variant="secondary"
          disabled={isLoading || isEditing}
        >
          Reset
        </Button>
        <Button disabled={isLoading || isEditing}>Aktualizovať údaje</Button>
      </FormRow>
    </SettingsForm>
  );
}

export default LandingPageForm;
