export function FormTextarea({
  lengthChecker,
  name,
  maxLength = "100",
  required = false,
  children,
  charactersLeft,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <textarea
        onChange={lengthChecker}
        name={name}
        id={name}
        rows="2"
        type="text"
        maxLength={maxLength}
        required={required}
      />
      <p>
        <span>{charactersLeft}</span> character/s left
      </p>
    </>
  );
}
