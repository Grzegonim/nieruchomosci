import { HttpException, HttpStatus } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { Request } from 'express';
import { diskStorage } from 'multer';
import * as fs from 'fs';

export const multerOptions: MulterOptions = {
  limits: {
    fileSize: 10485760, // 10 MB
  },
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    done: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    // Check if the file MIME type matches the allowed image types
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
      done(null, true); // Accept the file
    } else {
      done(
        new HttpException(
          "Unsupported file type",
          HttpStatus.BAD_REQUEST
        ),
        false
      ); // Reject the file
    }
  },
  storage: diskStorage({
    destination(
      req: Request,
      file: Express.Multer.File,
      done: (error: Error | null, fileName: string) => void,
    ) {
      const uploadPath = process.env.UPLOADED_TEMP_DIR;
      if (fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath);
      }
      done(null, process.env.UPLOAD_DIR);
    },
    filename(
      req: Request,
      file: Express.Multer.File,
      done: (error: Error | null, filename: string) => void,
    ) {
      const fileName = `${Date.now()}-${file.originalname}`;
      done(null, fileName);
    },
  }),
};







/*MulterOptions = {
  limits: {
    fileSize: 10485760, // 10 MB
  },
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    done: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    // Check if the file MIME type matches the allowed image types
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      done(null, true); // Accept the file
    } else {
      done(
        new HttpException(
          "Unsupported file type",
          HttpStatus.BAD_REQUEST
        ),
        false
      ); // Reject the file
    }
  },
  storage: diskStorage({
    destination(
      Request: Request, 
      file: Express.Multer.File,
      done: (error: Error | null, fileName: string) => void,
      ) {
        const uploadPath = process.env.UPLOADED_TEMP_DIR;
        if(fs.existsSync(uploadPath)) {
          fs.mkdirSync(uploadPath);
        }
        done(null, process.env.UPLOAD_DIR)
      },
      filename(
        req: Request,
        file: Express.Multer.File,
        done: (error: Error | null, filename: string) => void) {
        const fileName = `${Date.now()}-${file.originalname}`;
        done(null, fileName)
      }
  }),
};*/