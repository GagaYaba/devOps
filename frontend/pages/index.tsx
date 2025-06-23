import { Button, Input, Avatar } from "@heroui/react";
import { useRouter } from "next/router";

export default function LoginPage() {
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
        <h1 className="text-4xl font-bold text-gray-800">MatchMe</h1>
      </div>

      {/* Formulaire de connexion */}
      <form className="w-full max-w-sm space-y-6">
        <Input
          isRequired
          className="w-full"
          label="E-mail / Nom d'utilisateur"
          type="email"
          placeholder="votre.email@exemple.com"
        />
        <Input
          isRequired
          className="w-full"
          label="Mot de passe"
          type="password"
          placeholder="Votre mot de passe"
        />
        <Button
          className="w-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-lg py-3 text-lg"
          radius="full"
          type="submit"
          onClick={() => router.push("/home-swipe")}
        >
          Se connecter
        </Button>
      </form>

      {/* Section "Pas encore de compte ?" */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Pas encore de compte ?</p>
        <Button
          className="w-full max-w-xs bg-transparent text-orange-500 border border-orange-500 py-3 text-lg"
          radius="full"
          variant="bordered"
          onClick={() => router.push("/signup")}
        >
          S'inscrire
        </Button>
      </div>
    </div>
  );
}