import styles from "./Select.module.scss";
import downArrow from "../../assets/icons/down-arrow.png";
import { useEffect, useRef, useState } from "react";
import type { Option } from "../../types/option";

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
}

const CustomSelect = function ({ options , onChange }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("Choose your User");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  function handleOpenSelect() {
    setIsOpen(true);
  }

  function handleCloseSelect() {
    setIsOpen(false);
  }

  function handleSelect(label: string) {
    setSelectedValue(label);
    handleCloseSelect();
    onChange(label)
  }

  useEffect(() => {
    function handleClickOutSide(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        handleCloseSelect();
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
        onClick={handleOpenSelect}
      >
        <h2>{selectedValue}</h2>
        <img src={downArrow} alt="down arrow" />
      </div>
      {isOpen && (
        <div className={styles.selectBody}>
          <ul>
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleSelect(option.label)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
