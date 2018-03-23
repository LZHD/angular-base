import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBbarComponent } from './grid-bbar.component';

describe('GridBbarComponent', () => {
  let component: GridBbarComponent;
  let fixture: ComponentFixture<GridBbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
