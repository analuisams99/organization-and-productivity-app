module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tasks', [
      {
        task: 'Acordar',
        status: 'pronto',
        createdAt: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        task: 'Escovar os dentes',
        status: 'pronto',
        createdAt: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        task: 'Projeto Commerce',
        status: 'pendente',
        createdAt: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        task: 'Projeto Tasks',
        status: 'em andamento',
        createdAt: new Date('2011-08-01T19:58:00.000Z')
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};