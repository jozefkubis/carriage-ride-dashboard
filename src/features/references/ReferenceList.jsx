import { RiDeleteBin6Line } from "react-icons/ri";
import Heading from "../../components/Heading";
import Spinner from "../../components/Spinner";
import { useReferences } from "./useReferences";
import { useDeleteReference } from "./useDeleteReference";
import { useState } from "react";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";

const Stacked = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-4 text-[1rem]">
      {children}
    </div>
  );
};

function ReferenceList() {
  const { references, isLoading } = useReferences();
  const { isDeleting, deleteReference } = useDeleteReference();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedReferenceId, setSelectedReferenceId] = useState(null);

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="mt-10 flex flex-col gap-8">
        {references.map((reference) => {
          const formattedDate = new Date(
            reference.created_at,
          ).toLocaleDateString("sk-SK");

          return (
            <Stacked key={reference.id}>
              <div className="grid grid-cols-[1fr_auto] bg-white p-6 dark:bg-gray-800">
                <div>
                  <p className="text-sm">{formattedDate}</p>
                  <Heading type="h5">{reference.name}</Heading>
                  <p>{reference.text}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSelectedReferenceId(reference.id);
                      setIsOpenDeleteModal(true);
                    }}
                    disabled={isDeleting}
                  >
                    <RiDeleteBin6Line size={18} style={{ color: "gray" }} />
                  </button>
                </div>
              </div>
            </Stacked>
          );
        })}
      </div>

      {isOpenDeleteModal && (
        <Modal onClose={() => setIsOpenDeleteModal(false)}>
          <ConfirmDelete
            resourceName="referenciu"
            onConfirm={() => {
              if (selectedReferenceId) deleteReference(selectedReferenceId);
              setIsOpenDeleteModal(false);
            }}
            disabled={isDeleting}
            onClose={() => setIsOpenDeleteModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default ReferenceList;
