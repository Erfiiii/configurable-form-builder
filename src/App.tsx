import { FormContextProvider } from "./context";
import { FormFieldsConfig } from "./FormFieldsConfig";
import { FormPreview } from "./form/FormPreview";
import { Layout, LayoutItem } from "./layout";

function App() {
  return (
    <FormContextProvider>
      <Layout>
        <LayoutItem className="bg-gray-300">
          <FormFieldsConfig />
        </LayoutItem>
        <LayoutItem className="bg-gray-50">
          <FormPreview />
        </LayoutItem>
      </Layout>
    </FormContextProvider>
  );
}

export default App;
