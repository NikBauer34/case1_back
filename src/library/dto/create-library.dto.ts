import { IsString } from "class-validator";

export class CreateLibraryDto {
  @IsString({message: 'Название библиотеки должно быть строкой'})
  readonly title: string
}