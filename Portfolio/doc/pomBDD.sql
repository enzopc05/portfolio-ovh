-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 31 jan. 2025 à 12:16
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pom`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(100) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Telephone` varchar(20) DEFAULT NULL,
  `DateCreation` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Email` (`Email`(191))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`Id`, `Nom`, `Email`, `Telephone`, `DateCreation`) VALUES
(1, 'Alice Dupont', 'alice.dupont@example.com', '0600000001', '2025-01-30 14:00:34'),
(2, 'Bob Martin', 'bob.martin@example.com', '0600000002', '2025-01-30 14:00:34'),
(3, 'Charlie Durand', 'charlie.durand@example.com', '0600000003', '2025-01-30 14:00:34');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ClientId` int NOT NULL,
  `DateCommande` datetime DEFAULT CURRENT_TIMESTAMP,
  `Total` decimal(10,2) DEFAULT '0.00',
  PRIMARY KEY (`Id`),
  KEY `ClientId` (`ClientId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`Id`, `ClientId`, `DateCommande`, `Total`) VALUES
(1, 1, '2025-01-30 14:00:34', 31.00),
(2, 2, '2025-01-30 14:00:34', 15.75);

-- --------------------------------------------------------

--
-- Structure de la table `lignescommandes`
--

DROP TABLE IF EXISTS `lignescommandes`;
CREATE TABLE IF NOT EXISTS `lignescommandes` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CommandeId` int NOT NULL,
  `ProduitId` int NOT NULL,
  `Quantite` int NOT NULL,
  `SousTotal` decimal(10,2) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `CommandeId` (`CommandeId`),
  KEY `ProduitId` (`ProduitId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `lignescommandes`
--

INSERT INTO `lignescommandes` (`Id`, `CommandeId`, `ProduitId`, `Quantite`, `SousTotal`) VALUES
(1, 1, 1, 2, 21.00),
(2, 1, 3, 1, 10.00),
(3, 2, 2, 1, 15.75);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(100) NOT NULL,
  `Prix` decimal(10,2) NOT NULL,
  `Stock` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`Id`, `Nom`, `Prix`, `Stock`) VALUES
(1, 'Produit A', 10.50, 100),
(2, 'Produit B', 20.00, 200),
(3, 'Produit C', 5.75, 50);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`ClientId`) REFERENCES `clients` (`Id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `lignescommandes`
--
ALTER TABLE `lignescommandes`
  ADD CONSTRAINT `lignescommandes_ibfk_1` FOREIGN KEY (`CommandeId`) REFERENCES `commandes` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lignescommandes_ibfk_2` FOREIGN KEY (`ProduitId`) REFERENCES `produits` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
