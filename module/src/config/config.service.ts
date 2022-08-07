import { Inject, Injectable, Optional } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ConfigService {
  constructor(
    @Inject('CONFIG_OPTIONS') private options,
    @Optional() private config
  ) {

    readdirSync(this.options.path).map(async file => {
      if (file.slice(-2) === 'js') {
        const { default: module } = await import(path.resolve(this.options.path, file))
        this.config = {...this.config, ...module()}
      }
    })
  }

  get(path: string): string {
    return path.split('.').reduce((config, name) => config[name], this.config);
  }
}
