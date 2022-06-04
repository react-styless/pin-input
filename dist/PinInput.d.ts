import React from 'react';
interface Props {
    onComplete?: (str: string) => void;
    children: React.ReactElement | React.ReactElement[];
}
declare const PinInput: React.FC<Props>;
export default PinInput;
