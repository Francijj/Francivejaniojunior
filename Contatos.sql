CREATE TABLE contato (
    id NUMBER GENERATED ALWAYS AS IDENTITY,
    nome VARCHAR2(100),
    email VARCHAR2(100),
    mensagem VARCHAR2(500)
);