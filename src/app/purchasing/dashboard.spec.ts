import {it} from "@angular/core/testing";
import {stat} from "./dashboard";

describe('Dashboard Controller > ', () => {
  it('Build Chart Data', ()=> {
    var items = [
      {
        level: 'A'
      },
      {
        level: 'A'
      },
      {
        level: 'C'
      }
    ];
    expect(stat(items)).toEqual([['A', 2], ['B', 0], ['C', 1], ['D', 0]]);
  });
});
