import type { ConstraintInterface } from "./constraint.interface";

type Rule = {
  //
}

type Options = {
  name: string;
  label?: string;
  rules: string[];
}

export class NotBlank implements ConstraintInterface {
  constructor(options: Options);
  constructor(name: string, rules: Rule[]);
  constructor(name: string, label: string, rules: Rule[]);
  constructor(name: string | Options, label?: string | Rule[], rules?: Rule[]) {
    console.log(name, [
      label,
      rules,
    ])
  }

  validate() {
    return new Promise(()=> {
      
    });
  }
}

// 属性装饰器
export function NotBlankDecorator(target: unknown, propteryName: string) {
  console.log(target, propteryName);
  return new NotBlank({
    name: 'nickname',
    label: '昵称',
    rules: []
  });
  return new NotBlank('nickname', []);
  return new NotBlank('nickname', '昵称', []);
}