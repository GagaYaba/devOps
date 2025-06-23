import { Button, Input, Avatar, Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/router";
import { Camera, User } from 'lucide-react';

const genderOptions = [
    { key: "male", label: "Homme" },
    { key: "female", label: "Femme" },
    { key: "other", label: "Autre" },
    { key: "prefer_not_say", label: "Préfère ne pas dire" },
];

export default function SignupPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 p-4">

            {/* Avatar de profil avec icône de caméra */}
            <div className="mb-8 relative">
                <Avatar
                    alt="Photo de profil"
                    className="w-24 h-24 text-4xl bg-gray-300 flex items-center justify-center text-gray-700"
                    radius="full"
                >
                    <User size={60} />
                </Avatar>
                <div className="absolute bottom-0 right-0 p-2 bg-yellow-500 rounded-full shadow-lg cursor-pointer">
                    <Camera className="text-white" size={24} />
                </div>
            </div>

            {/* Formulaire d'inscription */}
            <form className="w-full max-w-sm space-y-4">
                <Input
                    isRequired
                    className="w-full"
                    label="Prénom"
                    type="text"
                    placeholder="Votre prénom"
                    size="sm"
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Nom"
                    type="text"
                    placeholder="Votre nom de famille"
                    size="sm"
                />

                {/* Champ Genre - Utilisation du composant Select de @heroui/react */}
                <Select
                    isRequired
                    className="w-full"
                    items={genderOptions}
                    label="Genre"
                    placeholder="Sélectionner votre genre"
                    size="sm"
                >
                    {(option) => <SelectItem key={option.key}>{option.label}</SelectItem>}
                </Select>

                <Input
                    isRequired
                    className="w-full"
                    label="Email"
                    type="email"
                    placeholder="Votre adresse email"
                    size="sm"
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Mot de passe"
                    type="password"
                    placeholder="Choisissez un mot de passe"
                    size="sm"
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Date de naissance"
                    type="date"
                    placeholder="mm / jj / aaaa"
                    size="sm"
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Ville"
                    type="text"
                    placeholder="Votre ville"
                    size="sm"
                />

                <Button
                    className="w-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-lg py-3 text-lg mt-6"
                    radius="full"
                    onClick={() => router.push("/signup-preferences")}
                    type="submit"
                >
                    S'inscrire
                </Button>
            </form>

            {/* Lien "Déjà inscrit ?" */}
            <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Déjà inscrit ?</p>
                <Button
                    className="w-full max-w-xs bg-transparent text-orange-500 border border-orange-500 py-3 text-lg"
                    radius="full"
                    variant="bordered"
                    onClick={() => router.push("/")}
                >
                    Se connecter
                </Button>
            </div>
        </div>
    );
}