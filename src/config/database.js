module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'usuario',
  password: 'senha',
  database: 'nomedodatabase',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
