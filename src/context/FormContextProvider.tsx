import {
  createContext,
  useReducer,
  useContext,
  type PropsWithChildren,
} from "react";
import type { FormField } from "../types";
import { reducer, type Action } from "../reducer";

type FormContextType = { state: FormField[]; dispatch: React.Dispatch<Action> };

const FormContext = createContext<FormContextType | undefined>(undefined);

export function useFormContext(value?: FormContextType): FormContextType {
  const context = useContext(FormContext);
  if (value !== undefined) {
    return value;
  }
  if (context === undefined) {
    throw new Error(
      "useFormContext must be used inside the <FormContextProvider/>",
    );
  }
  return context;
}

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function FormContextProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
}
