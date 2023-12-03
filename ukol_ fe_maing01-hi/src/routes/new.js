import { createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";

// pomocná stránka, nemá reálný učel
let New = createVisualComponent({
  uu5Tag: Config.TAG + "New",

  render() {
    return (
      <>
        <RouteBar />
        <h1>Ahpj</h1>
      </>
    );
  },
});

New = withRoute(New, { authenticated: true });

export { New };
export default New;
