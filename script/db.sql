create table usuarios(
  id BINARY(16) DEFAULT (UUID_TO_BIN(UUID(), 1)) PRIMARY KEY,
  nome varchar(255) not null,
  email varchar(255) not null,
  senha varchar(255) not null
);
select *
from usuarios;
SELECT BIN_TO_UUID(id, 1),
  nome,
  email
FROM usuarios;