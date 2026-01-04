import { defineConfig } from "astro/config";
import path from "path";
import { discoverApps } from "./src/discoverApps";

const appsPath = path.resolve("../apps");
const discoveredApps = discoverApps(appsPath);

console.log("VIAFRAME – discovered apps:", discoveredApps);

export default defineConfig({});
