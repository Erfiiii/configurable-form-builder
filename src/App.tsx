import { Layout, LayoutItem } from "./layout";

function App() {
  return (
    // <FormContextProvider>
    <Layout>
      <LayoutItem className="bg-gray-300">
        {/* <FormFieldsConfig /> */}
      </LayoutItem>
      <LayoutItem className="bg-gray-50">
        {/* <FormPreviewConfig /> */}
      </LayoutItem>
    </Layout>
    // </FormContextProvider>
  );
}

export default App;
