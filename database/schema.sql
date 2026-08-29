-- =====================================================================
--  muenot_web1 — MySQL schema
--  Import directly:  mysql -u <user> -p <database> < database/schema.sql
--  or paste into phpMyAdmin / Adminer / MySQL Workbench.
--
--  Engine: InnoDB   Charset: utf8mb4
--  Marketing content in `site_content` is seeded automatically by the app
--  on first admin login (seedContent()); no manual inserts are required.
-- =====================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- Admin users (dashboard accounts)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(191) NOT NULL UNIQUE,
  name          VARCHAR(191) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role          ENUM('owner','editor') NOT NULL DEFAULT 'editor',
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Admin sessions (login tokens)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_sessions (
  token      VARCHAR(64) PRIMARY KEY,
  user_id    INT NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (user_id),
  CONSTRAINT fk_session_user FOREIGN KEY (user_id)
    REFERENCES admin_users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Leads (contact + estimate form submissions)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS leads (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  type       ENUM('contact','estimate') NOT NULL,
  name       VARCHAR(191) NOT NULL,
  email      VARCHAR(191) NOT NULL,
  company    VARCHAR(191) NULL,
  phone      VARCHAR(64)  NULL,
  message    TEXT NULL,
  payload    JSON NULL,
  status     ENUM('new','in_progress','won','lost') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (type),
  INDEX (status),
  INDEX (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Site content (editable marketing sections, JSON blobs)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS site_content (
  section    VARCHAR(64) PRIMARY KEY,
  data       JSON NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Blog posts
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS blog_posts (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  slug         VARCHAR(191) NOT NULL UNIQUE,
  title        VARCHAR(255) NOT NULL,
  excerpt      TEXT NULL,
  body         MEDIUMTEXT NULL,
  cover_image  VARCHAR(512) NULL,
  author       VARCHAR(191) NULL,
  category     VARCHAR(128) NULL,
  published    TINYINT(1) NOT NULL DEFAULT 0,
  published_at TIMESTAMP NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- SEO settings (per-path metadata overrides)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS seo_settings (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  path             VARCHAR(255) NOT NULL UNIQUE,
  page_title       VARCHAR(191) NOT NULL,
  meta_title       VARCHAR(255) NULL,
  meta_description TEXT NULL,
  keywords         TEXT NULL,
  og_image         VARCHAR(512) NULL,
  no_index         TINYINT(1) NOT NULL DEFAULT 0,
  updated_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
