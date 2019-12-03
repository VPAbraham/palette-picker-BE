
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('palettes').del()
  .then(() => knex('projects').del())

  .then(() => {
    return Promise.all([

      knex('projects').insert({
        name: 'Neature'
      }, 'id')
    ])
  })
};

const createPalette = (knex, palette) => {
  return knex('palettes').insert(palette)
};

exports.seed = (knex) => {
  return knex('palettes').del()
  .then(() => knex('projects').del())
  .then(() => {
    let projectPromises = [];
    projectData.forEach(project => {
      projectPromises.push(createProject(knex, project))
    });
    return Promise.all(projectPromises);
  })
  .catch(error => console.error(`Error seeding data ${error}`));
};
