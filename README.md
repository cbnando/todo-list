# todo-list
Projeto todo-list

# Instalando Pacotes
npm init -y
npm i express
npm i -g nodemon

# Instalando o Banco
npm i sequelize sequelize-cli sqlite3

# Iniciando o banco
npx sequelize-cli init

# Criando uma model
npx sequelize-cli model:generate --name Task --attributes taskName:string,description:string,owner:string,status:string

# Criando o banco de dados
npx sequelize-cli db:migrate