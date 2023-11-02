import { forwardRef } from "react";

export default forwardRef(({ error, label, id, ...rest }, ref) => {
  return (
    <>
      <div>
        <label className="text headline" htmlFor={id}>{label}</label>
        <input ref={ref} {...rest} />
        {error ? <span className="text error">{error.message}</span> : null}
      </div>
    </>
  );
});
