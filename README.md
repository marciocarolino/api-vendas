Para isso, basta abrir o arquivo package.json e substituir nas dependências:


    "typeorm": "^0.3.x"


Por:


    "typeorm": "0.2.29"


Para garantir que não haverá conflito com outras bibliotecas, exclua a pasta node_modules e reinstale todas as dependências com o comando yarn ou npm install.


Na seção 21 aqui do curso, foram incluídas as videoaulas com as instruções para migrar o TypeORM para a versão 0.3.x.
------------------------------------------------
Em todas as aulas em que houver criação de migration, considerar colocar os campos com o tipo timestamp com o valor timestamp with time zone.


Substituir por (em todas as migrações da aplicação):


    {
      name: 'created_at',
      type: 'timestamp with time zone',
      default: 'now()',
    },
    {
      name: 'updated_at',
      type: 'timestamp with time zone',
      default: 'now()',
    },


