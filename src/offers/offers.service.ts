import { Injectable } from '@nestjs/common';
import { Offer, Photo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OffersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Offer[]> {
    return this.prismaService.offer.findMany({
      include: {
        photos: true
      }
    });
  }

  public getById(id: Offer['id']): Promise<Offer | null> {
    return this.prismaService.offer.findUnique({
      where: { id },
      include: {
        photos: true
      }
    });
  }

  public getByParams(
    priceMin: Offer['price'],
    priceMax: Offer['price'],
    floorMin: Offer['floor'],
    floorMax: Offer['floor'], 
    roomsMin: Offer['rooms'],
    roomsMax: Offer['rooms'],
    surfaceMin: Offer['surface'],
    surfaceMax: Offer['surface'], 
    location
      ): Promise<Offer[] | null> {
    return this.prismaService.offer.findMany({
      where: {
        floor: {
          gte: floorMin,
          lte: floorMax
        },
        price: {
          gte: priceMin,
          lte: priceMax
        },
        rooms: {
          gte: roomsMin,
          lte: roomsMax
        },
        surface: {
          gte: surfaceMin,
          lte: surfaceMax
        },
       },
      include: {
        photos: true
      }
    });
  }

  public create(offerData: Omit<Offer, 'id'>): Promise<Offer> {
    return this.prismaService.offer.create({
      data: offerData,
    });
  }

  public createPhoto(photoData: Omit<Photo, 'id'>): Promise<Photo> {
    return this.prismaService.photo.create({
      data: photoData,
    });
  }

  public updateById(id: Offer['id'], offerData: Omit<Offer, 'id'>): Promise<Offer> {
    return this.prismaService.offer.update({
      where: { id }, 
      data: offerData,
    });
  }

  public deleteById(id: Offer['id']): Promise<Offer> {
    return this.prismaService.offer.delete({
      where: { id },
    });
  }
}
