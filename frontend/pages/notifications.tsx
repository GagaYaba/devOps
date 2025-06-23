// pages/notifications.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { Card, Button } from '@heroui/react';
import { MessageCircleMore, Heart, ChevronLeft } from 'lucide-react';

import Header from '../components/Header';
import BottomNavbar from '../components/BottomNavbar';

interface NotificationsPageProps {
    hasHeaderNotification?: boolean;
}

export default function NotificationsPage({ hasHeaderNotification = false }: NotificationsPageProps) {
    const router = useRouter();

    const notifications = [
        { id: 1, type: 'message', icon: MessageCircleMore, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 2, type: 'like', icon: Heart, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 3, type: 3, icon: Heart, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 4, type: 'message', icon: MessageCircleMore, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 5, type: 'like', icon: Heart, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 6, type: 'message', icon: MessageCircleMore, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 7, type: 'like', icon: Heart, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 8, type: 3, icon: Heart, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 9, type: 'message', icon: MessageCircleMore, text: 'Lorem ipsum', time: 'Il y a 32min' },
        { id: 10, type: 'like', icon: Heart, text: 'Lorem ipsum', time: 'Il y a 32min' },
    ];

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 relative">
            <Header hasNotification={hasHeaderNotification} />
            <div className="fixed top-[80px] left-0 right-0 py-4 bg-neutral-50 z-30 flex items-center justify-center relative shadow-sm">
                {/* Bouton de retour */}
                <Button
                    isIconOnly
                    variant="light"
                    className="absolute left-4 p-0 text-gray-700"
                    onClick={handleGoBack}
                >
                    <ChevronLeft size={24} />
                </Button>
                {/* Titre de la page */}
                <h1 className="text-center text-2xl font-bold text-gray-800">Notifications</h1>
            </div>

            {/* Contenu principal des notifications */}
            <div className="flex-grow overflow-y-auto px-4" style={{ paddingTop: '80px', paddingBottom: '96px' }}>
                <main className="space-y-4 py-4">
                    {notifications.map(notification => (
                        <Card key={notification.id} radius="lg" className="w-full bg-orange-50 shadow-sm p-4 flex flex-row items-center gap-4">
                            <div className="p-2 rounded-full ">
                                <notification.icon size={30} className="text-orange-500" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-gray-800 font-medium">{notification.text}</p>
                                <p className="text-gray-500 text-sm">{notification.time}</p>
                            </div>
                        </Card>
                    ))}
                </main>
            </div>
            <BottomNavbar />
        </div>
    );
}