import PatternsModule from './patterns.module';

describe('PatternsModule', () => {
  let patternsModule;

  beforeEach(() => {
    patternsModule = new PatternsModule();
  });

  it('should create an instance', () => {
    expect(patternsModule).toBeTruthy();
  })
});
