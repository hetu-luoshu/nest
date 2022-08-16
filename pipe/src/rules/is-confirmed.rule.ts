import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class IsConfirmed implements ValidatorConstraintInterface {
  async validate(
    value: string,
    args?: ValidationArguments,
  ): Promise<boolean> {
    return value === args.object[args.property + '_confirmed'];
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return '比对失败';
  }
}
