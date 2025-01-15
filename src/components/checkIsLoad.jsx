import { useEffect, useState } from "react";
import Preload from "./Preload/Preload"; // Assurez-vous que c'est un composant React

function IsLoad({ children }) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoaded");

        if (!hasLoaded) {
            // Si c'est la première visite dans cet onglet
            sessionStorage.setItem("hasLoaded", "true");
        } else {
            // Si déjà chargé
            setIsFirstLoad(false);
        }

        // Simuler un temps de chargement pour afficher Preload

        // timer de l'animation
        setTimeout(() => {
            document.documentElement.classList.add("loaded");

            const loader = document.getElementById("preloading-page");
            loader?.classList.add("loaded");
        }, 1500);

        // time de switch de component
        const timer = setTimeout(() => {
            setIsFirstLoad(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return <>{isFirstLoad ? <Preload /> : children}</>;
}

export default IsLoad;
