import { IsNotEmpty, Validate } from 'class-validator';
import { IsConfirmed } from 'src/rules/is-confirmed.rule';
import { IsNotExistsRule } from 'src/rules/is-not-exists.rule';

export class CreateUserDto {
  @IsNotEmpty({ message: '邮箱不可以为空！' })
  @IsNotExistsRule('user', { message: '用户已经存在！' })
  email: string;

  @IsNotEmpty({ message: '密码不能为空！' })
  @Validate(IsConfirmed, { message: '密码不匹配！' })
  password: string;
}
