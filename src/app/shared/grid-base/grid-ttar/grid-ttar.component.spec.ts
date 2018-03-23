import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTtarComponent } from './grid-ttar.component';

describe('GridTtarComponent', () => {
  let component: GridTtarComponent;
  let fixture: ComponentFixture<GridTtarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTtarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
