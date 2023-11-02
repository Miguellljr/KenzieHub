import { forwardRef } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export default forwardRef(
  ({ isHidden, setIsHidden, error, label, id, ...rest }, ref) => {
    return (
      <>
        <div className={styles.inputBox} >
          <label className="text headline" htmlFor={id}>
            {label}
          </label>
          <input ref={ref} {...rest} />
          {error ? <span className="text error">{error.message}</span> : null}
          <button className="btn icon" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? (
              <MdVisibilityOff size={17} />
            ) : (
              <MdVisibility size={17} />
            )}
          </button>
        </div>
      </>
    );
  }
);
