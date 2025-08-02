import React, { useEffect, useRef, useState } from "react";
import type { Option } from "../../types/option";
import downArrow from "../../assets/icons/down-arrow.png";

import styles from "./Select.module.scss";

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
}

const CustomSelect = React.memo(function ({ options, onChange }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("Choose your option");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  function toggleSelect() {
    setIsOpen((prev) => !prev);
  }

  function handleSelect(option: Option) {
    setSelectedValue(option.label);
    setIsOpen(false);
    onChange(option.label);
  }

  useEffect(() => {
    function handleClickOutSide(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isOpen]);

  return (
    <div className={styles.select} ref={selectRef}>
      <div
        className={`${styles.selectHeader} ${isOpen ? styles.open : ""}`}
        onClick={toggleSelect}
      >
        <h2>{selectedValue}</h2>
        <img src={downArrow} alt="down arrow" />
      </div>
      {isOpen && (
        <div className={styles.selectBody}>
          <ul>
            {options.map((option) => (
              <li key={option.id} onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default CustomSelect;
