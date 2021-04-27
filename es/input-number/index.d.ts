import * as React from 'react';
import { InputNumberProps as RcInputNumberProps } from 'rc-input-number';
import { Omit } from '../_util/type';
import { SizeType } from '../config-provider/SizeContext';
declare type ValueType = string | number;
export interface InputNumberProps<T extends ValueType = ValueType> extends Omit<RcInputNumberProps<T>, 'size'> {
    prefixCls?: string;
    size?: SizeType;
    bordered?: boolean;
}
declare const _default: (<T extends React.ReactText = React.ReactText>(props: InputNumberProps<T> & {
    children?: React.ReactNode;
} & {
    ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
}) => React.ReactElement) & {
    displayName?: string | undefined;
};
export default _default;
