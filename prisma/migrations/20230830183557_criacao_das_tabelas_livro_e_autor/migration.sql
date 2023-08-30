-- CreateTable
CREATE TABLE `autor` (
    `autor_cpf` VARCHAR(15) NOT NULL,
    `autor_nome` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`autor_cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `livro` (
    `livro_isbn` VARCHAR(15) NOT NULL,
    `livro_titulo` VARCHAR(50) NULL,
    `livro_preco` FLOAT NOT NULL,
    `livro_idioma` VARCHAR(15) NULL,
    `livro_num_pags` INTEGER NULL,
    `livro_isbn_ant` VARCHAR(15) NULL,

    INDEX `FK_livro_ant`(`livro_isbn_ant`),
    PRIMARY KEY (`livro_isbn`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `livro` ADD CONSTRAINT `FK_livro_ant` FOREIGN KEY (`livro_isbn_ant`) REFERENCES `livro`(`livro_isbn`) ON DELETE RESTRICT ON UPDATE RESTRICT;
