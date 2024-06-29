import React from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export const Button = ({className, children}: ButtonProps) => {
    return (
        <button className={classNames(cls.button, {}, [className])}>
            {children}
        </button>
    );
};

