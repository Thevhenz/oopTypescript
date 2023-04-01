class Bird {
  private legs: number = 2;

  getLegs(): number {
    return this.legs;
  }

  flying(): void {
    console.log(`Bird is flying`);
  }

  async eating(): Promise<string> {
    return "eating";
  }
}
