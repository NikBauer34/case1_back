import { Body, Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';

@Controller('library')
export class LibraryController {
  constructor(private libraryService: LibraryService) {}

  @Post('/create')
  async create(@Body() dto: CreateLibraryDto) {
    return this.libraryService.create(dto)
  }

  @Get('/get_all')
  async getAllLibraries() {
    return this.libraryService.getAllLibraries()
  }
}
