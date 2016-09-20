import {
  addProviders,
  inject,
  it
} from '@angular/core/testing';
import {CircularProgress} from "./circular-progress";

// Load the implementations that should be tested
describe('CircularProgress > ', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(()=> {
    addProviders([
      CircularProgress
    ]);
  });

  it('percent', inject([ CircularProgress ], (progress: CircularProgress) => {
    progress.value = 50;
    progress.minValue = 0;
    progress.maxValue = 100;
    expect(progress.percent).toBe(0.5);
  }));

  it('0%', inject([ CircularProgress ], (progress: CircularProgress) => {
    progress.width = 10;
    progress.value = 0;
    progress.minValue = 0;
    progress.maxValue = 100;
    expect(progress.percent).toBe(0);
  }));

  it('12.5%', inject([ CircularProgress ], (progress: CircularProgress) => {
    progress.width = 10;
    progress.value = 12.5;
    progress.minValue = 0;
    progress.maxValue = 100;
    expect(progress.percent).toBe(0.125);
  }));

  it('25%', inject([ CircularProgress ], (progress: CircularProgress) => {
    progress.width = 10;
    progress.value = 25;
    progress.minValue = 0;
    progress.maxValue = 100;
    expect(progress.percent).toBe(0.25);
  }));

  it('50%', inject([ CircularProgress ], (progress: CircularProgress) => {
    progress.width = 10;
    progress.value = 50;
    progress.minValue = 0;
    progress.maxValue = 100;
    expect(progress.percent).toBe(0.5);
  }));

  it('75%', inject([ CircularProgress ], (progress: CircularProgress) => {
    progress.width = 10;
    progress.value = 75;
    progress.minValue = 0;
    progress.maxValue = 100;
    expect(progress.percent).toBe(0.75);
  }));

  it('100%', inject([ CircularProgress ], (progress: CircularProgress) => {
    progress.width = 10;
    progress.value = 100;
    progress.minValue = 0;
    progress.maxValue = 100;
    expect(progress.percent).toBe(1);
  }));

});
