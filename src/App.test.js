import { render, screen } from "@testing-library/react";

import App from "./App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("navigate to register page", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const link = screen.getByRole("link", { name: /register/i });
  await userEvent.click(link);

  expect(
    await screen.findByPlaceholderText(/enter email/i)
  ).toBeInTheDocument();
});