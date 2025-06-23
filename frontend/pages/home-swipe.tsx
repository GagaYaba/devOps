import { Button, Card, CardHeader, CardFooter, Image } from "@heroui/react";
import { useRouter } from "next/router";
import { Ghost, Undo2, LockKeyhole, HeartPlus, CircleFadingPlus } from "lucide-react";
import TinderCard from 'react-tinder-card'; // Import TinderCard

import BottomNavbar from '../components/BottomNavbar';
import Header from '../components/Header';
import React, { useState, useEffect, useRef } from 'react';

export default function HomeSwipePage() {
    const router = useRouter();
    const [isShowingDetails, setIsShowingDetails] = useState(false);
    const [hasHeaderNotification, setHasHeaderNotification] = useState(true);
    const [lastDirection, setLastDirection] = useState<string | null>(null);

    const profile = {
        name: "Ariana",
        age: 28,
        imageUrl: "/assets/profile_ariana.jpg",
        title: "Lorem ipsum dolor sit amet ?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
        details: [
            { id: 1, icon: LockKeyhole, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
            { id: 2, icon: LockKeyhole, text: "Curabitur vel sem at sapien tincidunt pulvinar ? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
            { id: 3, icon: LockKeyhole, text: "Quis autem vel eum iure reprehenderit ? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        ]
    };

    // Maintenant, 'profile' est défini avant d'être utilisé
    const [characters, setCharacters] = useState([profile]);
    const childRefs = useRef<any[]>([]);


    const handleToggleView = () => {
        setIsShowingDetails(!isShowingDetails);
    };

    useEffect(() => {
        const handleRouteChangeComplete = (url: string) => {
            if (url === "/notifications") {
                setHasHeaderNotification(false);
            }
        };
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router.events]);

    const cardHeightClass = "h-[580px]"; // Votre classe de hauteur de carte existante

    const swiped = (direction: string) => {
        console.log('You swiped: ' + direction)
        setLastDirection(direction);
        if (direction === 'right') {
            console.log('Liked');
        } else if (direction === 'left') {
            console.log('Next');
        }
        // Pas besoin de retirer la carte si on gère un seul profil à la fois
    };

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!')
    };

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-neutral-50 pb-20">
            <Header hasNotification={hasHeaderNotification} />
            {/* Conteneur principal de la carte et des swipes */}
            {/* Ce conteneur doit avoir une hauteur et une largeur définies pour que TinderCard fonctionne bien */}
            <main className="mt-10 flex-grow flex items-center justify-center p-4 w-full max-w-sm relative">
                {/* Condition pour afficher la carte principale ou la carte des détails */}
                {!isShowingDetails ? (
                    // --- Card côté Pile ---
                    // La TinderCard prend la hauteur de votre card principale
                    <TinderCard
                        ref={childRefs.current[0]} // Utilisez index 0 car nous n'avons qu'une seule carte
                        onSwipe={swiped}
                        onCardLeftScreen={() => outOfFrame(profile.name)}
                        preventSwipe={['up', 'down']}
                        // C'est ici que la hauteur de la TinderCard est définie pour correspondre à votre Card
                        className={`absolute w-full ${cardHeightClass}`}
                    >
                        <Card className={`w-full max-w-md bg-white shadow-xl overflow-hidden relative border-3 border-gray-400 flex flex-col ${cardHeightClass}`}>
                            <CardHeader className="p-6 pb-2 text-gray-800 font-bold text-3xl flex-shrink-0">
                                {profile.name}
                            </CardHeader>

                            {/* Section de l'image floue et du contenu textuel */}
                            <div className="relative w-auto flex-grow flex items-center justify-center overflow-hidden rounded-md mx-6 mb-4">
                                <Image
                                    removeWrapper
                                    alt="Profile background"
                                    className="z-0 w-full h-full object-cover filter blur-md"
                                    src={profile.imageUrl}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

                                {/* Contenu superposé à l'image */}
                                <div className="absolute z-20 flex flex-col items-center text-center p-4">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/65 backdrop-blur-md mb-4">
                                        <LockKeyhole className="text-orange-400" size={32} />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold mb-2">{profile.title}</h3>
                                    <p className="text-white text-sm text-center">{profile.description}</p>
                                </div>
                            </div>

                            {/* Boutons d'actions sous la carte */}
                            <CardFooter className="flex justify-around p-4 bg-white flex-shrink-0">
                                <Button isIconOnly radius="full" className="w-14 h-14 bg-yellow-400 text-black shadow-md">
                                    <Ghost size={32} />
                                </Button>
                                <Button isIconOnly radius="full" className="w-12 h-12 bg-gray-200 text-gray-700 shadow-md" onClick={handleToggleView}>
                                    <CircleFadingPlus size={24} />
                                </Button>
                                <Button isIconOnly radius="full" className="w-14 h-14 bg-black text-yellow-400 shadow-lg">
                                    <HeartPlus size={32} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </TinderCard>
                ) : (
                    // --- Card côté Face (détails) ---
                    <Card radius='lg' className={`w-full max-w-md bg-white shadow-xl overflow-hidden relative border-3 border-gray-400 p-6 flex flex-col ${cardHeightClass}`}>
                        {/* Contenu de la nouvelle carte (face arrière de la maquette) */}
                        <div className="flex-grow overflow-y-auto pr-2">
                            <p className="text-gray-600 text-sm mb-1">{profile.age} ans</p>
                            <h2 className="text-gray-800 font-bold text-3xl mb-4">{profile.name}</h2>
                            {profile.details.map((detail, index) => (
                                <div key={detail.id} className="mb-4">
                                    <div className="flex items-start gap-2 mb-1">
                                        <detail.icon size={24} className="text-orange-500 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-gray-700 font-semibold text-base">
                                                {detail.text.split('?')[0] + (detail.text.includes('?') ? ' ?' : '')}
                                            </h4>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-tight pl-[32px] -mt-1">{detail.text.split('?')[1] || detail.text}</p>
                                    {index < profile.details.length - 1 && (
                                        <hr className="border-t border-gray-200 my-4" />
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Bouton pour revenir à la vue principale */}
                        <div className="flex justify-center mt-6 flex-shrink-0">
                            <Button isIconOnly radius="full" className="w-12 h-12 bg-gray-200 text-gray-700 shadow-md" onClick={handleToggleView}>
                                <Undo2 size={24} />
                            </Button>
                        </div>
                    </Card>
                )}
            </main>
            <BottomNavbar />
        </div>
    );
}