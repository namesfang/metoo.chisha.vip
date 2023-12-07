import { NotBlankDecorator } from "../constraints/not-blank";

class LoginValidator2 {
  @NotBlankDecorator
  name: string;

  @MobileDecorator
  mobile: string;

  constructor(data: any) {

  }
}

export function LoginValidator(data) {
  new LoginValidator2(data)
}