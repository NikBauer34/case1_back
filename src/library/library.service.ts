import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Library } from './library.model';
import { WorkerService } from 'src/worker/worker.service';
import { CreateLibraryDto } from './dto/create-library.dto';

@Injectable()
export class LibraryService {
  constructor(@InjectModel(Library) private libraryRepository: typeof Library) {}
  async create(dto: CreateLibraryDto) {
    const {title} = dto
    const candidate_library = await this.libraryRepository.findOne({where: {title}})
    if (candidate_library) {
      throw new HttpException('Библиотека с таким названием уже существует', HttpStatus.BAD_REQUEST)
    }
    const library = await this.libraryRepository.create(dto)
    return library
  }
  async getAllLibraries() {
    const libraries = await this.libraryRepository.findAll()
    return libraries
  }
  async getLibraryByTitle(title: string) {
    const library = await this.libraryRepository.findOne({where: {title}})
    return library
  }
  async addWorkerToLibrary(library_id: number, worker_id: number) {
    const library = await this.libraryRepository.findByPk(library_id)
    console.log(library)
    library.workers.push(worker_id)
    await library.save()
    return library
  }
}
