import { useFormikContext } from "formik";
import { useEffect } from "react";

type FormObserverProps<T> = {
  onChange: (values: T) => void;
};

const FormObserver = <T extends object>({ onChange }: FormObserverProps<T>) => {
  const { values } = useFormikContext<T>();

  useEffect(() => {
    onChange(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return null; // This hook doesn't render anything
};

export default FormObserver;
