import { MandarineCore, Controller, GET, Middleware, MiddlewareTarget, ResponseParam } from "https://deno.land/x/mandarinets@master/mod.ts";
import * as flags from "https://deno.land/std@0.61.0/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

@Middleware(new RegExp('/docs/*'))
export class Middleware1 implements MiddlewareTarget {

    public onPreRequest(@ResponseParam() response: any): boolean {
        const angularIndex = Deno.openSync("./app/mandarine-static/index.html", {read: true});
        response.body = Deno.readAllSync(angularIndex);
        return false;
    }

    public onPostRequest(): void {
    }
}

@Controller()
export class MyController {

    @GET('/docs/:product/:content')
    public handler1() {
    }

    @GET('/docs/:branch/:product/:content')
    public handler2() {
    }

}

new MandarineCore().MVC().run({port: port});