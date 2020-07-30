import { MandarineCore, Controller, GET, Middleware, MiddlewareTarget, ResponseParam } from "https://deno.land/x/mandarinets@master/mod.ts";
import * as flags from "https://deno.land/std@0.61.0/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

@Controller()
export class MyController {
    @GET('/(.*)')
    public handler1() {
        const angularIndex = Deno.openSync("./app/mandarine-static/index.html", {read: true});
        return Deno.readAllSync(angularIndex);
    }
}

new MandarineCore().MVC().run({port: port});