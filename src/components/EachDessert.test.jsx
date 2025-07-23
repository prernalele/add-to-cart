import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EachDessert from "./EachDessert";

const mockDessert = {
  key: 1,
  category: "Test category",
  name: "Test Dessert",
  price: 29.99,
  image: "test-image.jpg",
};

describe("EachDessert", () => {
  //setup
  const mockAddToCartButton = jest.fn();

  beforeEach(() => {
    mockAddToCartButton.clear();
  });

  test("renders dessert details correctly", () => {
    // render
    render(
      <EachDessert
        selectedKey={mockDessert.key}
        data={mockDessert}
        pictures={mockDessert.image}
        category={mockDessert.category}
        name={mockDessert.name}
        price={mockDessert.price}
        // itemsInCart={itemsInCart}
        // setItemsInCart={setItemsInCart}
        // totalItemsInCart={totalItemsInCart}
        // setTotalItemsInCart={setTotalItemsInCart}
      />
    );
    // assert

    expect(screen.getByText("Test Dessert")).toBeInTheDocument();
    // expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
