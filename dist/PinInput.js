import React from 'react';
const PinInput = ({ onComplete, children }) => {
    const childrenRef = React.useRef([]);
    const indexRef = React.useRef(0);
    const valueRef = React.useRef([]);
    const moveFocus = React.useCallback((dir) => {
        const length = childrenRef.current.length;
        const prev = indexRef.current;
        const target = dir === 'next' ? Math.min(prev + 1, length - 1) : Math.max(prev - 1, 0);
        if (dir === 'prev') {
            childrenRef.current[target].value = null;
        }
        if (target === length - 1 && prev === length - 1) {
            childrenRef.current[target].blur();
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(valueRef.current.join(''));
            return;
        }
        childrenRef.current[target].focus();
        indexRef.current = target;
    }, [onComplete]);
    const handleChange = React.useCallback((e) => {
        if (e.target.value === '')
            return;
        valueRef.current = valueRef.current.concat(e.target.value);
        moveFocus('next');
    }, [moveFocus]);
    const handleKeyUp = React.useCallback((e) => {
        if (e.key === 'Backspace') {
            valueRef.current = valueRef.current.slice(0, indexRef.current - 1);
            moveFocus('prev');
        }
    }, [moveFocus]);
    const handleFocus = React.useCallback(() => {
        const prev = indexRef.current;
        childrenRef.current[prev].focus();
    }, []);
    React.useEffect(() => {
        childrenRef.current[0].focus();
    }, []);
    return (React.createElement("label", null, React.Children.map(children, (child, index) => React.cloneElement(child, {
        ref: (ref) => (childrenRef.current[index] = ref),
        onChange: handleChange,
        onKeyUp: handleKeyUp,
        onClick: handleFocus,
        placeholder: ' ',
        maxLength: 1,
    }))));
};
export default PinInput;
