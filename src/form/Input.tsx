import React, { useReducer } from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  errorMessages?: string[];
  validating: boolean;
}
/** We could use native input but for styling we use our own component */
export function Input({ label, errorMessages, validating, ...attrs }: InputProps) {
  return (
    <div className="FormGroup">
      <label>{label}</label>
      <input {...attrs} />
      {errorMessages && errorMessages.map((msg, ix) => <b key={ix}>{msg}</b>)}
      {validating ? 'validating...' : ''}
    </div>
  );
}
