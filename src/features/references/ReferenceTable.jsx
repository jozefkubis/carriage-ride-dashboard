import React from "react";
import ReferenceList from "./ReferenceList";
import { useReferences } from "./useReferences";
import Spinner from "../../components/Spinner";

export default function ReferenceTable() {
  const { references, isLoading } = useReferences();

  if (isLoading) return <Spinner />;

  if (!references || references.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Žiadne referencie nenájdené.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      {references.map((reference) => (
        <ReferenceList key={reference.id} reference={reference} />
      ))}
    </section>
  );
}
