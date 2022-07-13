import { useEffect } from "react";

export const UseDisableButton = (
  isDeleted,
  updateButtonRef,
  deleteButtonRef
) => {
  useEffect(() => {
    if (isDeleted) {
      updateButtonRef.current.disabled = true;
      deleteButtonRef.current.disabled = true;
    }
  }, [isDeleted]);
};
