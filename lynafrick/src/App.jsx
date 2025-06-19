
import ContentPage from "./Components/pages/ContentPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <div>
        <CartProvider>
          <ContentPage />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
