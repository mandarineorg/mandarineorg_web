import { MandarineCore, Controller, GET } from "https://deno.land/x/mandarinets@v2.1.0/mod.ts";
import * as flags from "https://deno.land/std@0.71.0/flags/mod.ts";

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

    @GET('/mandarine')
    public handler2() {
        return "You have found the secret endpoint. This is such a Mandarine moment!";
    }
}

new MandarineCore().MVC().run({port: port});