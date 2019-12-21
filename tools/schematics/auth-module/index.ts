import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';


export default function(schema: any): Rule {
  
  if (!schema.name.startsWith('auth-')) {
    throw new Error(`Auth modules must be prefixed with 'auth-'`);
  }

  return chain([

    // // Example code generated with shematic
    // externalSchematic('@nrwl/schematics', 'lib', {
    //   name: schema.name,
    //   project: schema.project
    // }), 

    
    externalSchematic('@schematics/angular', 'module', {
      name: schema.name,
      project: schema.project,
      routing: true,
      module: 'app.module.ts'
    }),
    externalSchematic('@schematics/angular', 'service', {
      name: schema.name,
      project: schema.project,
      path: path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'services'
        )
    }),
    externalSchematic('@schematics/angular', 'guard', {
      name: schema.name,
      project: schema.project,
      path: path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'services'
        ),
    }),
  ])
}
