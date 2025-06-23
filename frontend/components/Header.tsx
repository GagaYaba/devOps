// components/Header.tsx

import { Button, Image } from "@heroui/react";
import { Bell } from 'lucide-react';
import { useRouter } from 'next/router';

interface HeaderProps {
    hasNotification?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasNotification }) => {
    const router = useRouter();
    const isNotificationsPage = router.pathname === '/notifications';

    const handleNotificationClick = () => {
        router.push('/notifications');
    };

    const bellButtonClasses = `
        min-w-unit-0 p-0 text-gray-700 relative
        ${isNotificationsPage
            ? 'flex items-center justify-center rounded-full bg-orange-400 w-10 h-10'
            : ''
        }
    `;

    const bellIconClasses = `
        ${isNotificationsPage ? 'text-black' : 'text-gray-700'} // Icône noire sur la page notifications, gris par défaut
    `;

    const onClickHandler = isNotificationsPage ? undefined : handleNotificationClick;

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 bg-neutral-50 w-full flex justify-between items-center p-4`}>
            <div className="flex-grow flex justify-center">
                <Image
                    src="/assets/logo.png"
                    alt="MatchMe Logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
            </div>
            <Button
                isIconOnly
                variant="light"
                className={bellButtonClasses}
                onClick={onClickHandler}
            >
                <Bell size={24} className={bellIconClasses} />
                {hasNotification && !isNotificationsPage && (
                    <span className="absolute top-[10px] right-[15px] block h-2.5 w-2.5 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
                )}
            </Button>
        </header>
    );
};

export default Header;