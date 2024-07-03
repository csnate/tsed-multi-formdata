import { BodyParams, Context, Locals, MulterOptions, MultipartFile, PlatformMulterFile, PlatformResponse, Res } from '@tsed/common';
import { Controller } from "@tsed/di";
import { UseBefore } from '@tsed/platform-middlewares';
import { Post, Returns } from "@tsed/schema";
import multer from 'multer';
import { SetNameMiddleware } from '../../middlewares/SetNameMiddleware';

@Controller("/multi")
export class MultiController {
    @Post("/")
    @MulterOptions({ storage: multer.diskStorage({}) })
    @UseBefore(SetNameMiddleware)
    @Returns(200)
    @Returns(500)
    get(
        @MultipartFile('file') file: PlatformMulterFile,
        @Locals('name') name: string,
        @BodyParams() body: any,
        @Res() res: PlatformResponse
    ) {
        console.log('Body', body);
        if (name && file) {
            res.status(200);
        } else {
            res.status(500);
        }
        return "";
    }
}
