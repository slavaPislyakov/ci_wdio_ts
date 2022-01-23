// class ExampleClass {
//   get searchInput(){
//      return $("input[name='q']");
//   }
//   get searchButton() {
//     return $('input[name="btnK"]');
//   }
//   get firstResult() {
//     return $("(//h3)[1]");
//   }
// }
// export default new ExampleClass();

class ExampleClass {
  static get searchInput(): string {
    return "input[name='q']";
  }
  static get searchButton(): string {
    return 'input[name="btnK"]';
  }
  static get firstResult(): string {
    return "(//h3)[1]";
  }
}

export { ExampleClass };
