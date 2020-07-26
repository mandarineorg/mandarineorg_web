import { MandarineCore } from "https://deno.land/x/mandarinets@v1.2.1/mod.ts";
import * as flags from "https://deno.land/std@0.61.0/flags/mod.ts";

const {args} = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

new MandarineCore().MVC().run({ port: port });