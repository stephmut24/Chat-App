import React, { useState } from "react";
import { Menu, Home, Users, Settings } from "lucide-react"; // Icônes
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Création de l'état pour gérer l'ouverture/fermeture du sidebar
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  // Fonction pour inverser l'état du sidebar (minimisé ou non)
  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <div className={`min-h-screen bg-base-200 p-3 shadow-lg transition-all duration-300 ${isSidebarMinimized ? "w-16" : "w-64"}`}>
      <div className="flex items-center mb-4">
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6 mr-2" /> 
        </button>
        {!isSidebarMinimized && <h2 className="text-xl font-bold ml-2">Dashboard</h2>} 
      </div>
      <ul className="menu">
        <li>
          <Link to="/dashboard">
            <Home className="w-6 h-6" />
            {!isSidebarMinimized && <span className="ml-2">Accueil</span>} {/* Afficher le texte uniquement si le sidebar n'est pas minimisé */}
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users">
            <Users className="w-6 h-6 m-1" />
            {!isSidebarMinimized && <span className="ml-2">Utilisateurs</span>}
          </Link>
        </li>
        <li>
          <Link to="/dashboard/settings">
            <Settings className="w-6 h-6" />
            {!isSidebarMinimized && <span className="ml-2">Paramètres</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
