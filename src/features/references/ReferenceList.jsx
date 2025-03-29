import { RiDeleteBin6Line } from "react-icons/ri";
import Heading from "../../components/Heading";
import Spinner from "../../components/Spinner";
import { useDeleteReference } from "./useDeleteReference";
import { useState } from "react";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";

const Stacked = ({ children }) => (
  <div className="mx-auto flex max-w-4xl flex-col gap-4">{children}</div>
);

function ReferenceList({ reference }) {
  const { isDeleting, deleteReference } = useDeleteReference();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  if (!reference) return null;

  const { id, created_at, name, text } = reference;
  const formattedDate = new Date(created_at).toLocaleDateString("sk-SK");

  return (
    <>
      <Stacked>
        <div className="flex justify-between rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div>
            <p className="text-sm text-gray-500">{formattedDate}</p>
            <Heading type="h5">{name}</Heading>
            <p className="text-gray-700 dark:text-gray-300">{text}</p>
          </div>
          <button
            onClick={() => setIsOpenDeleteModal(true)}
            disabled={isDeleting}
            className="text-gray-500 transition hover:text-red-600"
          >
            <RiDeleteBin6Line size={18} />
          </button>
        </div>
      </Stacked>

      {isOpenDeleteModal && (
        <Modal onClose={() => setIsOpenDeleteModal(false)}>
          <ConfirmDelete
            resourceName="referenciu"
            onConfirm={() => {
              deleteReference(id);
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
