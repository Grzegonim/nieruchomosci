import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { OffersService } from './offers.service';
import { Offer } from '@prisma/client';
import { CreateOfferDTO } from './dtos/create-offer.dto';
import { UpdateOfferDTO } from './dtos/update-offer.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/config/multerOptions.config';

@Controller('offers')
export class OffersController {
  constructor (private offersService: OffersService) {}

  @Get('/')
  getAll(): any {
    return this.offersService.getAll();
  }

  @Get('/search')
  async getByParams(@Body() searchParams: any): Promise<Offer[]> {
    const { priceMin, priceMax, floorMin, floorMax, roomsMin, roomsMax, surfaceMin, surfaceMax, location } = searchParams
    const offers = await this.offersService.getByParams( priceMin, priceMax, floorMin, floorMax, roomsMin, roomsMax, surfaceMin, surfaceMax, location );
    if (offers.length === 0) throw new NotFoundException('Offers not found');
    return offers;
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    const offer = await this.offersService.getById(id);
    if (!offer) throw new NotFoundException('Offer not found');
    return offer;
  }

  @Post('/')
  create(@Body() offerData: CreateOfferDTO): Promise<Offer> {
      return this.offersService.create(offerData);
  }

  @Put('/:id')
  async updateById(@Param('id') id: string, @Body() offerData: UpdateOfferDTO) {
    if(!(await this.offersService.getById(id))) {
      throw new NotFoundException('Offer not found');
    }

    await this.offersService.updateById(id, offerData);
    return { success: true };
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: string) {
    if(!(await this.offersService.getById(id))) {
      throw new NotFoundException('Offer not found');
    }
    console.log(id)
    await this.offersService.deleteById(id);
    return { success: true };
  }

  @Post('/upload/:offerId')
  @UseInterceptors(FilesInterceptor('photos', 15, multerOptions))
  async uploadPhotos(@UploadedFiles() files, @Param('offerId') offerId: string) {
    if(!(await this.offersService.getById(offerId))) {
      throw new NotFoundException('Offer not found');
    }
    console.log(files)
    await files.map(async photo => {
      const photoData = {
        url: photo.path,
        name: photo.filename,
        offerId
      }
      await this.offersService.createPhoto(photoData);
    })
    return { message: 'Files are uploaded successfully' };
  }

}
