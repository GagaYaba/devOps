import { Button } from "@heroui/react";
import { Drama, MessageCircleMore, UserRound, SlidersHorizontal } from 'lucide-react';
import { useRouter } from "next/router";

export default function BottomNavbar() {
    const router = useRouter();

    const navItems = [
        { icon: Drama, label: "Match", path: "/home-swipe" },
        { icon: MessageCircleMore, label: "Chats", path: "/chats" },
        { icon: UserRound, label: "Profil", path: "/profile" },
        { icon: SlidersHorizontal, label: "Filtres", path: "/filters" },
    ];

    return (
        <> {/* Fragment React pour pouvoir retourner plusieurs éléments au même niveau */}
            <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-white shadow-lg rounded-full px-6 py-3 mb-7 w-[calc(100%-2rem)] max-w-sm flex justify-around items-center">
                {navItems.map((item) => {
                    const isActive = router.pathname === item.path;
                    return (
                        <Button
                            key={item.path}
                            isIconOnly
                            variant="light"
                            className="relative flex flex-col items-center justify-center p-0 min-w-0"
                            onClick={() => router.push(item.path)}
                        >
                            {/* Conteneur de l'icône avec le style de sélection */}
                            <div
                                className={`flex items-center justify-center rounded-full transition-colors duration-200 w-10 h-14
                                ${isActive ? 'bg-black' : 'bg-transparent'} `}
                            >
                                {/* Icônes principales */}
                                <item.icon size={25} className={isActive ? 'text-yellow-400' : 'text-gray-700'} />
                            </div>
                        </Button>
                    );
                })}
            </nav>
            <div className="fixed bottom-0 left-0 w-full h-24 bg-neutral-50 z-40"></div>
        </>
    );
}