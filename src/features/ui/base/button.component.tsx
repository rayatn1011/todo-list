interface IButton {
    children: React.ReactNode;
    type: 'submit' | 'reset' | 'button';
    variant: 'text' | 'filled' | 'outlined';
    color?: 'default' | 'primary';
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    isDisabled?: boolean;
    isFullWidth?: boolean;
}

export function Button({
    children,
    type,
    variant,
    color = 'default',
    startIcon,
    endIcon,
    isDisabled = false,
    isFullWidth = false,
}: IButton) {
    const defaultClass =
        'flex items-center gap-x-1 justify-center rounded border px-6 py-3 text-xl disabled:border-black-200 disabled:bg-black-200 transition';
    const customClassConfig = {
        filled: {
            primary:
                'border-primary-500 bg-primary-500 text-white hover:bg-primary-600 hover:border-primary-600 active:bg-primary-600 active:border-primary-600 active:shadow-[0_0_0_0.25rem] active:shadow-primary-600/30',
            default: '',
        },
        outlined: {
            primary:
                'border-primary-500 bg-white text-primary-500 hover:text-primary-600 hover:border-primary-600 active:border-primary-600 active:text-primary-700 active:shadow-[0_0_0_0.25rem] active:shadow-primary-600/30',
            default: '',
        },
        text: {
            primary:
                'border-transparent bg-white text-primary-500 hover:text-primary-600 active:text-primary-700',
            default: '',
        },
    };

    let customClass = defaultClass;

    customClass += ` ${customClassConfig[variant][color]}`;

    customClass += isFullWidth ? ' w-full' : '';

    return (
        <button type={type} className={customClass} disabled={isDisabled}>
            {startIcon}
            {children}
            {endIcon}
        </button>
    );
}
