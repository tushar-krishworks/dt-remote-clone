import ReactDOM from "react-dom/client";
import ReservationsScreen, {
  IReservationsScreenProps,
} from "./pages/reservations/SingleReservation";
import Test, { ITestProps } from "./pages/test";

// import styles from "./styles.css?inline";

const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class BaseWebComponent<P extends JSX.IntrinsicAttributes> extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.injectStyles();
  }
  private async injectStyles() {
    const response = await fetch("/src/index.css");
    const styles = await response.text();
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    this.shadowRoot?.appendChild(styleElement);
  }

  protected renderComponent(Component: React.ComponentType<P>) {
    const props = this.getPropsFromAttributes<P>();
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<Component {...props} />);
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};
    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }
    return props as T;
  }
}

class TestWebComponent extends BaseWebComponent<ITestProps> {
  connectedCallback() {
    this.renderComponent(Test);
  }
}

class ReservationWebComponent extends BaseWebComponent<IReservationsScreenProps> {
  connectedCallback() {
    this.renderComponent(ReservationsScreen);
  }
}

export { ReservationWebComponent, TestWebComponent };
