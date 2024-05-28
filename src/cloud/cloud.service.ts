import { Injectable } from '@nestjs/common';
import EasyYandexS3 from 'easy-yandex-s3';
@Injectable()
export class CloudService {
  s3: EasyYandexS3;
  constructor() {
    this.s3 = new EasyYandexS3({
      auth: {
        accessKeyId: `${process.env.accessKeyId}`,
        secretAccessKey: `${process.env.secretAccessKey}`
      },
      Bucket: `${process.env.bucket}`,
      debug: process.env.NODE_ENV == 'development' ? true : false
    })
  }

  async uploadInvitation(path: string) {
    let upload = await this.s3.Upload({
      path
    }, `/${process.env.invitations_folder}/`)
    console.log(upload)
    return upload
  }
}
