import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
} from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

console.log(cls);

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}></div>
            <AppLink theme={AppLinkTheme.Secondary} to={'/'}>Home</AppLink>
            <AppLink to={'/about'}>About</AppLink>
        </div>
    );
};

