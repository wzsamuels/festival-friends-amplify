import { ChangeEvent, useRef, useState } from "react";

const formatPhoneNumber = (value: string) => {
  const cleaned = ("" + value).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    let result = "";
    if (match[1]) {
      result += "(" + match[1];
      if (match[1].length === 3) {
        result += ") ";
      }
    }
    if (match[2]) {
      result += match[2];
      if (match[2].length === 3) {
        result += "-";
      }
    }
    if (match[3]) {
      result += match[3];
    }
    return result;
  }
  return value;
};

export const useFormattedPhoneInput = (initialValue = "") => {
  const [phone, setPhone] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cursorPos = e.target.selectionStart;
    const rawValue = e.target.value;
    const cleaned = rawValue.replace(/\D/g, "");
    // Limit to 10 digits
    if (cleaned.length > 10) {
      return;
    }
    const formatted = formatPhoneNumber(rawValue);

    setPhone(formatted);

    if (!cursorPos) {
      return;
    }

    if (
      rawValue[cursorPos - 1] === "(" ||
      rawValue[cursorPos - 1] === ")" ||
      rawValue[cursorPos - 1] === "-"
    ) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.selectionStart = cursorPos - 1;
          inputRef.current.selectionEnd = cursorPos - 1;
        }
      }, 0);
    }
  };

  return {
    phone,
    inputRef,
    handlePhoneChange,
  };
};
