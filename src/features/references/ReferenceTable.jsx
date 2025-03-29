import React from "react";
import ReferenceList from "./ReferenceList";
import { useReferences } from "./useReferences";
import Spinner from "../../components/Spinner";

export default function ReferenceTable() {
  const { references, isLoading } = useReferences();

  if (isLoading) return <Spinner />;

  return (
    <>
      {references.map((reference) => (
        <ReferenceList key={reference.id} reference={reference} />
      ))}
    </>
  );
}
