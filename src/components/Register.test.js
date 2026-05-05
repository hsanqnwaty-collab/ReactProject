import { render, screen } from "@testing-library/react";

import Register from "./Register";
import userEvent from "@testing-library/user-event";

test("shows error for invalid email", async () => {
  render(<Register />);

  const input = screen.getByPlaceholderText(/enter email/i);
  const button = screen.getByRole("button", { name: /register/i });

  await userEvent.type(input, "wrong-email");
  await userEvent.click(button);

  expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
});