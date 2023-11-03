import {
  useCallback,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  memo,
} from "react";
// import { InputValue, useInput } from "@/hooks/useInput";
import { CSSProperties } from "react";
import styles from "./otpInput.module.scss";
import clsx from "clsx";

// interface OneCharInputProps<T> {
//   className?: string;
//   defaultValue?: T;
//   type?: "number" | "text" | "password";
//   onChange?: (value: InputValue) => void;
//   onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
// }

// const OneCharInput = <T extends InputValue>({
//   className,
//   defaultValue,
//   type = "number",
//   onChange,
//   onKeyUp,
// }: OneCharInputProps<T>) => {
//   const { setValue, value } = useInput({ defaultValue });

//   const handleChange = useCallback(
//     (e: ChangeEvent<HTMLInputElement>) => {
//       const currVal = e.target.value;

//       console.log("aquii", currVal);
//       const newValueExceeds = currVal && currVal.length > 1;
//       console.log("aquii new", newValueExceeds);
//       if (newValueExceeds) return;
//       console.log("aquii newpass", { newValueExceeds, currVal });
//       setValue(currVal);
//       if (onChange) onChange(currVal);
//     },
//     [setValue]
//   );

//   const handleFocus = useCallback(() => {}, []);

//   const handleKeyUp = useCallback(
//     (e: React.KeyboardEvent<HTMLInputElement>) => {
//       onKeyUp(e);
//     },
//     []
//   );

//   return (
//     <input
//       className={className}
//       value={value ?? ""}
//       maxLength={1}
//       onChange={handleChange}
//       type={type}
//       onFocus={handleFocus}
//       onKeyUpCapture={handleKeyUp}
//     />
//   );
// };

// export interface OtpInputProps {
//   codeLength?: number;
// }

// interface OneCharState {
//   value: InputValue;
// }
// interface OtpInputState {
//   inputs: OneCharState[];
// }

// export const OtpInput: FC<OtpInputProps> = ({ codeLength = 4 }) => {
//   const arr = useMemo(
//     () => [...Array(codeLength)].map(() => ({ value: undefined })),
//     [codeLength]
//   );

//   const [state, setState] = useState<OtpInputState>({ inputs: arr });

//   const handleOneCharChange = useCallback(
//     (value: InputValue, index: number) => {
//       const newInputs = [...state.inputs];
//       newInputs[index].value = value;
//       console.log("aquii", newInputs, index, value);
//       setState({ ...state, inputs: newInputs });
//     },
//     [setState]
//   );

//   const handleKeyUp = useCallback(
//     (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
//       const existsInput = state.inputs[i].value;
//       console.log("aquii exists", existsInput);
//       if (existsInput) return;
//     },

//     []
//   );

//   console.log({ state });

//   return (
//     <>
//       <div className={styles.inputRow}>
//         {arr.map((_, i) => (
//           <OneCharInput
//             key={i}
//             className={styles.oneCharInput}
//             onChange={(val) => {
//               console.log("aquii val", { val });
//               if (val || val === "") handleOneCharChange(val, i);
//             }}
//             onKeyUp={(e) => {
//               handleKeyUp(e, i);
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

function usePrevious<T>(value?: T) {
  const ref = useRef<T>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}
export function SingleOTPInputComponent(props: SingleOTPInputProps) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <input ref={inputRef} {...rest} />;
}

const SingleOTPInput = memo(SingleOTPInputComponent);

export interface OTPInputProps {
  length: number; // Number of inputs
  onChangeOTP: (otp: string) => any; // Handle onOTPChange to use its value

  autoFocus?: boolean; // Auto focus to input programmatically
  isNumberInput?: boolean; // If otp is number
  disabled?: boolean;

  style?: CSSProperties; // Style for container OTP
  className?: string; // Class for container OTP

  inputStyle?: CSSProperties; // Style for input
  inputClassName?: string; // Class for input
}

export function OTPInputComponent(props: OTPInputProps) {
  const {
    length,
    isNumberInput,
    autoFocus,
    disabled,
    onChangeOTP,
    inputClassName,
    inputStyle,
    ...rest
  } = props;

  // Define state activeInput = 0
  const [activeInput, setActiveInput] = useState(0);

  // Define state otpValues = array with <length> items with default value = ""
  const [otpValues, setOTPValues] = useState(Array<string>(length).fill(""));

  // helpers
  // Define some helper functions

  // Handle onFocus input

  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length]
  );
  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index);
    },
    [focusInput]
  );

  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join("");
      onChangeOTP(otpValue);
    },
    [onChangeOTP]
  );

  const getRightValue = useCallback(
    (str: string) => {
      let changedValue = str;

      if (!isNumberInput || !changedValue) {
        return changedValue;
      }

      return Number(changedValue) >= 0 ? changedValue : "";
    },
    [isNumberInput]
  );

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || "";
      setOTPValues(updatedOTPValues);
      handleOtpChange(updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues]
  );

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  );

  const handleOnBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = e.key;

      switch (pressedKey) {
        case "Backspace":
        case "Delete": {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus("");
          } else {
            focusPrevInput();
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          focusNextInput();
          break;
        }
        default: {
          // Ignore all special keys if it is not numeric or alphabet characters
          if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault();
          }

          break;
        }
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  );

  // Handle onPaste input
  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("text/plain")
        .trim()
        .slice(0, length - activeInput)
        .split("");
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });
        setOTPValues(updatedOTPValues);
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, getRightValue, length, otpValues]
  );

  return (
    <div {...rest} className={clsx(styles.inputRow, rest.className)}>
      {Array(length)
        .fill("")
        .map((_, index) => (
          <SingleOTPInput
            key={`SingleInput-${index}`}
            focus={activeInput === index}
            value={otpValues && otpValues[index]}
            autoFocus={autoFocus}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={handleOnBlur}
            onPaste={handleOnPaste}
            style={inputStyle}
            className={clsx(styles.oneCharInput, inputClassName)}
            disabled={disabled}
          />
        ))}
    </div>
  );
}

export const OtpInput = memo(OTPInputComponent);
