import { ValidationPipe, ValidationError } from "@nestjs/common";

export class Validator extends ValidationPipe {
  protected mapChildrenToValidationErrors(error: ValidationError, parentPath?: string): ValidationError[] {
    const errors = super.mapChildrenToValidationErrors(error, parentPath);
    return errors;
  }
}
