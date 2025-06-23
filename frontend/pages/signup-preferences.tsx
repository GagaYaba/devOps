import { Button, Input, Avatar, Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/router";
import Image from 'next/image';

const typeRelationsOptions = [
    { key: "amitie", label: "Amitié" },
    { key: "amour", label: "Amour" },
    { key: "casual", label: "Relation occasionnelle" },
    { key: "autre", label: "Autre" },
];

const orientationOptions = [
    { key: "hetero", label: "Hétérosexuel(le)" },
    { key: "homo", label: "Homosexuel(le)" },
    { key: "bi", label: "Bisexuel(le)" },
    { key: "pan", label: "Pansexuel(le)" },
    { key: "asexuel", label: "Asexuel(le)" },
    { key: "autre", label: "Autre" },
];

const humourOptions = [
    { key: "sarcastique", label: "Sarcastique" },
    { key: "absurde", label: "Absurde" },
    { key: "noir", label: "Noir" },
    { key: "leger", label: "Léger" },
    { key: "auto_derision", label: "Auto-dérision" },
    { key: "autre", label: "Autre" },
];


export default function PreferencesPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 p-4">

            {/* Section Logo et Titre */}
            <div className="mb-8 flex flex-col items-center">
                <Avatar
                    src="/assets/logo.png"
                    alt="MatchMe Logo"
                    className="w-24 h-24 mb-4"
                    radius="full"
                />
                <h1 className="text-4xl font-bold text-gray-800">Préférences</h1>
            </div>

            {/* Formulaire des préférences */}
            <form className="w-full max-w-sm space-y-4">

                <Input
                    isRequired
                    className="w-full"
                    label="Localisation"
                    type="text"
                    placeholder="Rayon de recherche (km)"
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Âge minimum"
                    type="number"
                    placeholder="Âge minimum"
                />
                <Input
                    isRequired
                    className="w-full"
                    label="Âge maximum"
                    type="number"
                    placeholder="Âge maximum"
                />

                <Select
                    isRequired
                    className="w-full"
                    items={typeRelationsOptions}
                    selectionMode="multiple"
                    label="Type de relations"
                    placeholder="Type de relation recherché"
                    size="sm"
                >
                    {(option) => <SelectItem key={option.key}>{option.label}</SelectItem>}
                </Select>

                <Select
                    isRequired
                    className="w-full"
                    items={orientationOptions}
                    selectionMode="multiple"
                    label="Orientation"
                    placeholder="Votre orientation sexuelle"
                    size="sm"
                >
                    {(option) => <SelectItem key={option.key}>{option.label}</SelectItem>}
                </Select>

                <Select
                    isRequired
                    className="w-full"
                    items={humourOptions}
                    selectionMode="multiple"
                    label="Humour"
                    placeholder="Votre type d'humour"
                    size="sm"
                >
                    {(option) => <SelectItem key={option.key}>{option.label}</SelectItem>}
                </Select>

                <Button
                    className="w-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-lg py-3 text-lg mt-6"
                    radius="full"
                    type="submit"
                    onClick={() => router.push("/home-swipe")}
                >
                    Enregistrer
                </Button>
            </form>

        </div>
    );
}