import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';


export default function(schema: any): Rule {
  return chain([
    // externalSchematic('@nrwl/schematics', 'lib', {
    //   name: schema.name,
    //   project: schema.project
    // }), 
    externalSchematic('@schematics/angular', 'module', {
      project: schema.project,
      name: schema.name,
      path: path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'services'
        ),
      routing: true,
      module: 'app.module.ts'
    })
  ])
}
