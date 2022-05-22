import React from 'react';

interface Props {
  type?: string;
  length?: number;
  className?: string;
  inputStyle?: React.CSSProperties;
  id?: string;
  onComplete?: (str: string) => void;
  value: string;
  setValue: (e: any) => void;
}
const PinInput: React.FC<Props> = ({
  id,
  value,
  setValue,
  type = 'text',
  length = 4,
  className,
  inputStyle,
  onComplete,
}) => {
  const arrayRef = React.useRef<any>([]);
  const [targetIndex, setTargetIndex] = React.useState(0);

  const valArr = React.useMemo(() => {
    return value
      .split('')
      .concat(new Array(length - value.split('').length).fill(''));
  }, [value]);
  const handleChange = (index: number) => {
    return (e: any) => {
      const out = valArr
        .map((item, i) => {
          if (i === index) {
            return e.target.value.slice(-1);
          }
          return item;
        })
        .join('');
      setValue(out);
      if (e.target.value) {
        const nextIndex = index + 1;
        const tIndex = nextIndex >= length ? length - 1 : nextIndex;
        setTargetIndex(tIndex);
        if (nextIndex >= length) {
          if (onComplete) {
            onComplete(out);
            arrayRef.current[tIndex]?.blur();
          }
        } else {
          arrayRef.current[tIndex]?.focus();
        }
      }
    };
  };

  const handleBackspace = (index: number) => {
    const tIndex = index - 1 < 0 ? 0 : index - 1;
    arrayRef.current[tIndex]?.focus();
    setTargetIndex(tIndex);
  };

  const handleKeyUp = (index: number) => (e: any) => {
    if (e.keyCode === 8) {
      handleBackspace(index);
    }
  };
  const forceFocus = (e: any) => {
    arrayRef.current[targetIndex]?.focus();
    e.preventDefault();
    e.stopPropagation();
  };
  console.log(value);
  return (
    <label className={className} htmlFor={`${id}-${targetIndex}`}>
      {new Array(length).fill('').map((v, i) => {
        return (
          <input
            onClick={forceFocus}
            id={`${id}-${i}`}
            placeholder={' '}
            style={inputStyle}
            key={i}
            onKeyUp={handleKeyUp(i)}
            ref={(el) => (arrayRef.current[i] = el)}
            type={type}
            value={valArr[i]}
            onChange={handleChange(i)}
          />
        );
      })}
    </label>
  );
};

export default PinInput;
