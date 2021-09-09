import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    HttpStatus,
    HttpCode,Put,Delete
  } from '@nestjs/common';
  import { StudentsService } from './students.service';
  import { student } from './students.entity';
@Controller('students')
export class StudentsController {
    constructor(private readonly StudentsService: StudentsService) {}

    @Post() // POST /albums
    @HttpCode(HttpStatus.CREATED)
    async createAlbum(@Body() newAlbum: student): Promise<student> {
      const album = new student();
      console.log(newAlbum);
      
      album.name = newAlbum.name;
      album.surname = newAlbum.surname;
      return await this.StudentsService.createOrUpdate(album);
    }
  
    @Get() // GET /albums
    async findAlbums(): Promise<student[]> {
      return await this.StudentsService.findAll();
    }
  
    @Get(':id') // GET /albums/123
    async findAlbum(@Param('id') id: number): Promise<student> {
      return await this.StudentsService.findOne(id);
    }
  
    @Put(':id') // PUT /albums/123
    async updateAlbum(
      @Param('id') id: number,
      @Body() createAlbumDto: student,
    ): Promise<student> {
      const album = await this.StudentsService.findOne(id);
      album.name = createAlbumDto.name;
      album.surname = createAlbumDto.surname;
      return await this.StudentsService.createOrUpdate(album);
    }
  
    @Delete(':id')  // DELETE /albums/123
    async deleteAlbum(@Param('id') id: number): Promise<any> {
      await this.StudentsService.delete(id);
      return { success: true };
    }

}
