import { IsNotEmpty } from "class-validator";

export class CreateArticleDto {
  @IsNotEmpty({ message: "标题不可以为空！" })
  title: string;

  @IsNotEmpty({ message: "内容不可以为空！" })
  content: string;

  @IsNotEmpty({ message: "图片不可以为空！" })
  thumb: string;
}