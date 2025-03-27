CREATE DATABASE IF NOT EXISTS `proyecto`;
USE `proyecto`;

CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre_rol` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `tecnico` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_tecnico` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  `ID_Rol` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_Rol` (`ID_Rol`),
  CONSTRAINT `tecnico_ibfk_1` FOREIGN KEY (`ID_Rol`) REFERENCES `rol` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `contrasenia` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `inventariado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_dispositivo` varchar(50) DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `ID_Usuario` int NOT NULL,
  `ID_Tecnico` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_Usuario` (`ID_Usuario`),
  KEY `ID_Tecnico` (`ID_Tecnico`),
  CONSTRAINT `inventariado_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE,
  CONSTRAINT `inventariado_ibfk_2` FOREIGN KEY (`ID_Tecnico`) REFERENCES `tecnico` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `reparacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) DEFAULT NULL,
  `estado` int DEFAULT NULL,
  `fecha_reparacion` date DEFAULT NULL,
  `ID_Inventariado` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_Inventariado` (`ID_Inventariado`),
  CONSTRAINT `reparacion_ibfk_1` FOREIGN KEY (`ID_Inventariado`) REFERENCES `inventariado` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `bitacora_asignacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ID_Inventariado` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_Inventariado` (`ID_Inventariado`),
  CONSTRAINT `bitacora_asignacion_ibfk_1` FOREIGN KEY (`ID_Inventariado`) REFERENCES `inventariado` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `bitacora_reparacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ID_Reparacion` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_Reparacion` (`ID_Reparacion`),
  CONSTRAINT `bitacora_reparacion_ibfk_1` FOREIGN KEY (`ID_Reparacion`) REFERENCES `reparacion` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;