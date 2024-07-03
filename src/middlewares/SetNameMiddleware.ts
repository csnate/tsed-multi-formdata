import { Next } from '@tsed/common';
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { BodyParams, Locals } from "@tsed/platform-params";

@Middleware()
export class SetNameMiddleware implements MiddlewareMethods {
    use(@BodyParams('name') name: string, @Locals() locals: any, @Next() next: Next) {
        locals.name = name;
        next();
    }
}
