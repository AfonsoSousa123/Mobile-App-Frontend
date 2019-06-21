--
-- Database: `ionic`
--
DROP DATABASE IF EXISTS ionic;
CREATE DATABASE ionic;
USE ionic;

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizadores`
--
CREATE TABLE `utilizador` (
  `utilizador_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(55) NOT NULL,
  `email` VARCHAR(55) NOT NULL,
  `password` VARCHAR(55) NOT NULL
) ENGINE=InnoDB;

-- --------------------------------------------------------
--
-- Estrutura da tabela `post`
--
CREATE TABLE `post` (
  `post_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `titulo` int(10) NOT NULL,
  `descricao` int(40) NOT NULL,
  `user_id` int(11) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES utilizador(`utilizador_id`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- --------------------------------------------------------
--
-- Estrutura da tabela `relacoes`
--
CREATE TABLE `relacoes` (
  `relacao_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `status` int(1) NOT NULL,
  `user1` int(11) NOT NULL,
  `user2` int(11) NOT NULL,
  FOREIGN KEY (`user1`) REFERENCES utilizador(`utilizador_id`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (`user2`) REFERENCES utilizador(`utilizador_id`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;
