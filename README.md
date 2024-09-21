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
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string

# Criando o banco de dados
npx sequelize-cli db:migrate

# Criptografar senha
npm i bcryptjs

# Token
npm i jsonwebtoken

# Cadastrar variaveis de ambiente
npm i dotenv