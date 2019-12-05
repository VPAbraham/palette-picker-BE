const projectsData = require('../../../sample_data/projectsData');
const palettesData = require('../../../sample_data/palettesData');

const createProject = (knex, project) => {
  return knex('projects').insert({
    'name': project.name
  }, 'id')
  .then(projectId => {
    let palettesPromises =[];
    palettesData.filter(palette => palette.projects_id === project.project_id)
    .forEach(palette => {
      palettesPromises.push(
        createPalette(knex, {
          name: palette.name,
          color1: palette.color1,
          color2: palette.color2,
          color3: palette.color3,
          color4: palette.color4,
          color5: palette.color5,
          projects_id: projectId[0]
        })
      )
    });
    return Promise.all(palettesPromises);
  })
}

const createPalette = (knex, palette) => {
  return knex('palettes').insert(palette)
};

exports.seed = (knex) => {
  return knex('palettes').del()
  .then(() => knex('projects').del())
  .then(() => {
    let projectPromises = [];
    projectsData.forEach(project => {
      projectPromises.push(createProject(knex, project))
    });
    return Promise.all(projectPromises);
  })
  .catch(error => console.error(`Error seeding data ${error}`));
};
